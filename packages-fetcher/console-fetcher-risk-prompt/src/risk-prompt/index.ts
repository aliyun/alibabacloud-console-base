import {
  isUndefined as _isUndefined
} from 'lodash-es';

import {
  ERiskType,
  EConvertedVerifyType
} from '../enum';
import {
  IRiskPromptResolveData,
  IRiskPromptProps,
  IRiskCanceledErrorProps,
  TOldMainRiskExtraConfig,
  IRiskResponseExtend
} from '../types';
import {
  DEFAULT_EXTRA_RISK_CONFIG
} from '../const';
import intl from '../intl';
import {
  convertMpkSetting,
  getAccountIdFromRiskInfo,
  safeJsonStringify,
  convertRiskResponse,
  convertToRiskErrorInvalid,
  convertToRiskErrorCancelled,
  getSubVerificationSettingUrl,
  getRiskValueViaConfig
} from '../util';
import {
  slsRiskTerminatedWithUnexpectedError
} from '../sls';

import riskInvalid from './risk-invalid';
import openDialog from './open-dialog';
import openIvPageDialog from './open-iv-page-dialog';

export default async function riskPrompt<T = Record<string, unknown>>({
  error,
  newRisk,
  riskConfig,
  riskResponse,
  riskParametersGetter,
  reRequestWithVerifyResult
}: IRiskPromptProps<T>): Promise<IRiskPromptResolveData> {
  // 首先判断 consoleVersion 是不是 3.0。如果是，那么后续流程使用独立的核身页面
  const {
    accountType, consoleVersion
  } = getRiskValueViaConfig({
    riskResponse,
    riskConfigKey: 'DATA_PATH_NEW_EXTEND',
    defaultValue: {} as IRiskResponseExtend
  });
  // 是否是 MPK 账号风控
  const {
    isMpk
  } = convertMpkSetting({
    riskConfig,
    riskResponse
  });

  const verifyUrl = getRiskValueViaConfig({
    riskResponse,
    riskConfigKey: 'DATA_PATH_VERIFY_URL',
    defaultValue: ''
  });

  // 判断是否是 3.0，需要打开独立核身页面
  if (consoleVersion === '3.0' && verifyUrl) {
    return openIvPageDialog({
      isMpk,
      accountType,
      ivPageUrl: verifyUrl,
      reRequestWithVerifyResult
    });
  }

  // 对传入的风控响应 riskResponse 解析，得到是否是新版风控、账号类型、风控类型、核身手段等信息
  const riskInfo = convertRiskResponse({
    newRisk,
    riskConfig,
    riskResponse,
    riskParametersGetter
  });

  const accountId = getAccountIdFromRiskInfo(riskInfo);
  const stringifiedRiskResponse = safeJsonStringify(riskResponse);
  // 旧版主账号风控配置，将业务方传入的配置与默认配置结合进行判断
  const oldMainRiskExtraConfig: TOldMainRiskExtraConfig = {
    // 验证码发送接口
    URL_SEND_CODE: riskConfig?.URL_SEND_CODE ?? DEFAULT_EXTRA_RISK_CONFIG.URL_SEND_CODE,
    // 手机、邮箱、MFA 设备修改链接
    URL_SETTINGS: riskConfig?.URL_SETTINGS ?? DEFAULT_EXTRA_RISK_CONFIG.URL_SETTINGS,
    // 验证码发送 Http Method，默认是 Post
    REQUEST_METHOD: riskConfig?.REQUEST_METHOD ?? DEFAULT_EXTRA_RISK_CONFIG.REQUEST_METHOD
  };

  // 子账号风控的核身方式参数不合法（子账号可以配置多种核身方式，因此 subRiskValidators 是数组）
  if (riskInfo.riskType === ERiskType.NEW_SUB && !riskInfo.subRiskValidators.length) {
    // 弹窗展示错误信息
    await riskInvalid({
      stringifiedRiskResponse,
      subRisk: true,
      urlSetting: getSubVerificationSettingUrl(accountId),
      errorMessage: intl('message:invalid_unknown!lines')
    });

    // 用户关闭弹窗后抛出错误
    throw convertToRiskErrorInvalid(error);
  }

  // 主账号或者 MPK 账号风控，核身方式为单选
  if (riskInfo.riskType !== ERiskType.NEW_SUB) {
    const {
      verifyType, verifyDetail, convertedVerifyType
    } = riskInfo;
  
    // convertedVerifyType 是将 riskResponse 中的 verifyType 转化为 EConvertedVerifyType 的结果
    switch (convertedVerifyType) {
      // 未检测到核身方式
      case EConvertedVerifyType.NONE:
        await riskInvalid({
          urlSetting: oldMainRiskExtraConfig.URL_SETTINGS,
          stringifiedRiskResponse,
          errorMessage: intl('message:invalid_unknown!lines')
        });

        throw convertToRiskErrorInvalid(error);
      // 未检测到合法的核身方式
      case EConvertedVerifyType.UNKNOWN:
        await riskInvalid({
          urlSetting: oldMainRiskExtraConfig.URL_SETTINGS,
          stringifiedRiskResponse,
          errorMessage: intl('message:invalid_unsupported_{method}!html!lines', {
            method: verifyType
          })
        });

        throw convertToRiskErrorInvalid(error);
      case EConvertedVerifyType.SMS:
      case EConvertedVerifyType.EMAIL:
      // 旧版主账号风控的 sms & email 场景，必须有 verifyDetail
        if (riskInfo.riskType === ERiskType.OLD_MAIN && !verifyDetail) {
          await riskInvalid({
            urlSetting: oldMainRiskExtraConfig.URL_SETTINGS,
            stringifiedRiskResponse,
            errorMessage: intl('message:invalid_unsupported_{method}!html!lines', {
              method: verifyType
            })
          });
        
          throw convertToRiskErrorInvalid(error);
        }

        break;
      default: // MFA 以及新版主账号风控的场景
        break;
    }
  }

  // 当风控流程因为非预期错误被终止（例如 identity 相关接口抛出异常错误，riskResponse 解析后的数据非法），这种情况客户只能关闭弹窗，然后提交工单解决
  // 因此，在客户关闭弹窗时，需要感知客户是否由于流程被非预期错误卡住，并在关闭弹窗时上报埋点，并且给 riskError 中增加 unexpectedErrorType 属性
  // 由此，可以及时通过埋点发现潜在风险，接入方也能根据关闭弹窗抛出的错误中，是否包含 unexpectedErrorType 字段，并自动走防御逻辑（例如降级）
  const riskCanceledErrorProps: IRiskCanceledErrorProps = {};

  // 用于修改 riskCanceledErrorProps 对象属性的函数。该函数会传递到风控交互组件中。
  // 当风控非预期错误发生时，会调用该函数对 riskCanceledErrorProps 属性进行修改。
  // 风控弹窗被手动关闭时会读取 riskCanceledErrorProps 的属性确定是否发生了非预期错误。如果发生，会上报非预期错误埋点，并且对抛出的错误增加 unexpectedErrorType 属性，从而能被业务方感知
  const setRiskCanceledErrorProps = (props: IRiskCanceledErrorProps): void => {
    const {
      unexpectedValue, unexpectedErrorCode, unexpectedErrorMessage, unexpectedErrorType
    } = props;

    riskCanceledErrorProps.unexpectedValue = unexpectedValue;
    riskCanceledErrorProps.unexpectedErrorType = unexpectedErrorType;
    riskCanceledErrorProps.unexpectedErrorCode = unexpectedErrorCode;
    riskCanceledErrorProps.unexpectedErrorMessage = unexpectedErrorMessage;
  };

  return openDialog({
    riskInfo,
    oldMainRiskExtraConfig,
    setRiskCanceledErrorProps,
    reRequestWithVerifyResult
  }).catch(err => {
    // err 为 undefined 表示客户点击 X 或者取消按钮关闭弹窗
    if (_isUndefined(err)) {
      const {
        unexpectedValue, unexpectedErrorCode, unexpectedErrorMessage, unexpectedErrorType
      } = riskCanceledErrorProps;

      // 发生非预期错误
      if (unexpectedErrorType) {
        slsRiskTerminatedWithUnexpectedError({
          value: unexpectedValue,
          type: unexpectedErrorType,
          errorCode: unexpectedErrorCode,
          errorMessage: unexpectedErrorMessage
        });

        // 对抛出的错误增加属性
        throw convertToRiskErrorCancelled(err, unexpectedErrorType);
      }
    }

    throw err ?? convertToRiskErrorCancelled(err);
  });
}
