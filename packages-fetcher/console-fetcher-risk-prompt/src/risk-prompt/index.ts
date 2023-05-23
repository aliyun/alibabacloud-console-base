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
  TOldMainRiskExtraConfig
} from '../types';
import {
  DEFAULT_EXTRA_RISK_CONFIG
} from '../const';
import intl from '../intl';
import {
  getAccountIdFromRiskInfo,
  safeJsonStringify,
  convertRiskResponse,
  convertToRiskErrorInvalid,
  convertToRiskErrorCancelled,
  getSubVerificationSettingUrl
} from '../util';
import {
  slsRiskTerminatedWithUnexpectedError
} from '../sls';

import riskInvalid from './risk-invalid';
import openDialog from './open-dialog';

export default async function riskPrompt<T = Record<string, unknown>>({
  error,
  newRisk,
  riskConfig,
  riskResponse,
  riskParametersGetter,
  reRequestWithVerifyResult
}: IRiskPromptProps<T>): Promise<IRiskPromptResolveData> {
  const riskInfo = convertRiskResponse({
    newRisk,
    riskConfig,
    riskResponse,
    riskParametersGetter
  });

  const accountId = getAccountIdFromRiskInfo(riskInfo);
  const stringifiedRiskResponse = safeJsonStringify(riskResponse);
  const oldMainRiskExtraConfig: TOldMainRiskExtraConfig = {
    URL_SEND_CODE: riskConfig?.URL_SEND_CODE ?? DEFAULT_EXTRA_RISK_CONFIG.URL_SEND_CODE,
    URL_SETTINGS: riskConfig?.URL_SETTINGS ?? DEFAULT_EXTRA_RISK_CONFIG.URL_SETTINGS,
    REQUEST_METHOD: riskConfig?.REQUEST_METHOD ?? DEFAULT_EXTRA_RISK_CONFIG.REQUEST_METHOD
  };

  if (riskInfo.riskType === ERiskType.NEW_SUB && !riskInfo.subRiskValidators.length) {
    await riskInvalid({
      stringifiedRiskResponse,
      subRisk: true,
      urlSetting: getSubVerificationSettingUrl(accountId),
      errorMessage: intl('message:invalid_unknown!lines')
    });

    throw convertToRiskErrorInvalid(error);
  }

  if (riskInfo.riskType !== ERiskType.NEW_SUB) {
    const {
      verifyType, verifyDetail, convertedVerifyType
    } = riskInfo;
  
    switch (convertedVerifyType) {
      case EConvertedVerifyType.NONE:
        await riskInvalid({
          urlSetting: oldMainRiskExtraConfig.URL_SETTINGS,
          stringifiedRiskResponse,
          errorMessage: intl('message:invalid_unknown!lines')
        });

        throw convertToRiskErrorInvalid(error);
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
  const setRiskCanceledErrorProps = (props: IRiskCanceledErrorProps): void => {
    const {
      unexpectedError, unexpectedErrorType
    } = props;

    riskCanceledErrorProps.unexpectedError = unexpectedError;
    riskCanceledErrorProps.unexpectedErrorType = unexpectedErrorType;
  };

  return openDialog({
    riskInfo,
    oldMainRiskExtraConfig,
    setRiskCanceledErrorProps,
    reRequestWithVerifyResult
  }).catch(err => {
    // err 为 undefined 表示客户点击 X 或者取消按钮关闭弹窗
    if (_isUndefined(err)) {
      if (riskCanceledErrorProps.unexpectedErrorType) {
        slsRiskTerminatedWithUnexpectedError({
          errorCode: riskCanceledErrorProps.unexpectedError,
          type: riskCanceledErrorProps.unexpectedErrorType
        });
      }
    }

    throw err ?? convertToRiskErrorCancelled(err);
  });
}
