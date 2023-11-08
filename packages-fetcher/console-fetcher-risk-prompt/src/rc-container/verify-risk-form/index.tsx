import React, {
  useMemo
} from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Flex from '@alicloud/console-base-rc-flex';

import {
  EIconType,
  ERiskType,
  EConvertedVerifyType,
  ESubVerificationDeviceType
} from '../../enum';
import {
  TAuthFormProps,
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  ALIYUN_APP_VERSION,
  DEFAULT_EXTRA_RISK_CONFIG
} from '../../const';
import {
  useModelProps
} from '../../model';
import {
  useGenerateCodeButtonProps,
  useAuthFormHandleInputChange
} from '../../hooks';
import intl from '../../intl';
import Form from '../../rc/form';
import Message from '../../rc/message';
import SubAuthFormWrapper from '../../rc/sub-auth-form-wrapper';
import VerifyCodeInput from '../../rc/verify-code-input';
import {
  intlVerifySetting,
  getSubVerificationSettingUrl
} from '../../util';

import {
  getInputWidth,
  getVerifyLabel,
  getVerifyCodeInputType,
  getSubAuthFormWrapperProps,
  getCurrentKeyOfErrorMessageObject
} from './get-auth-form-attrs';
import getFormVerifyDetail from './get-form-verify-detail';

const ScInfo = styled.strong`
  margin-right: 12px;
`;

// 手机/邮箱/VMFA 修改链接不 shrink
const ScSettingButton = styled(Button)`
  flex-shrink: 0;
`;

/**
 * 安全验证的通用表单组件，用于
 * 1. 子账号风控手机、邮箱验证
 * 2. 旧版/降级 MPK 的手机、邮箱、VMFA 验证
 */
export default function VerifyRiskForm(authFormProps: TAuthFormProps): JSX.Element {
  const {
    riskType, verifyType
  } = authFormProps;

  // 是否展示修改手机/邮箱链接，以及虚拟 MFA 设备的解绑链接
  const showVerifySettingUrlChangeButton = useMemo((): boolean => {
    // 子账号虚拟 MFA 验证不展示修改 MFA 的链接
    if (riskType === ERiskType.NEW_SUB && verifyType === ESubVerificationDeviceType.VMFA) {
      return false;
    }

    if (ALIYUN_APP_VERSION) {
      // 阿里云 APP 中的 MFA 验证不展示修改 MFA 的链接
      if (verifyType === EConvertedVerifyType.MFA || verifyType === DEFAULT_EXTRA_RISK_CONFIG.BY_MFA) {
        return false;
      }
    }

    return true;
  }, [riskType, verifyType]);

  const {
    accountId,
    oldMainAccountUrlSetting
  } = useModelProps();
  const {
    data: {
      errorMessageObject
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const currentKeyOfErrorMessageObject = getCurrentKeyOfErrorMessageObject(authFormProps);
  const errorMessageOfCurrentType = errorMessageObject[currentKeyOfErrorMessageObject];

  const {
    verifyUniqId,
    showSendCodeSuccessTip,
    generateCodeButtonProps
  } = useGenerateCodeButtonProps(authFormProps);

  const {
    handleInputChange
  } = useAuthFormHandleInputChange({
    verifyUniqId,
    authFormProps
  });

  return <>
    <Message {...{
      visible: Boolean(errorMessageOfCurrentType),
      iconType: EIconType.ERROR,
      message: errorMessageOfCurrentType
    }} />
    <Message {...{
      visible: showSendCodeSuccessTip,
      iconType: EIconType.SUCCESS,
      message: intl('message:send:code:success')
    }} />
    <SubAuthFormWrapper {...getSubAuthFormWrapperProps(authFormProps)}>
      <Form {...{
        items: [{
          label: getVerifyLabel(authFormProps),
          labelTextAlign: 'center',
          content: <Flex align="center">
            <ScInfo>{getFormVerifyDetail(authFormProps)}</ScInfo>
            {showVerifySettingUrlChangeButton && <ScSettingButton {...{
              target: '_blank',
              spm: `set-${authFormProps.verifyType}`,
              theme: ButtonTheme.TEXT_PRIMARY,
              label: riskType === ERiskType.OLD_MAIN ? intlVerifySetting(authFormProps.convertedVerifyType) : intlVerifySetting(authFormProps.verifyType),
              href: [ERiskType.MPK, ERiskType.OLD_MAIN].includes(riskType) ? oldMainAccountUrlSetting : getSubVerificationSettingUrl(accountId)
            }} />}
          </Flex>
        }, {
          label: intl('attr:code'),
          labelTextAlign: 'center',
          content: <VerifyCodeInput {...{
            handleInputChange,
            generateCodeButtonProps,
            showErrorMessage: true,
            dialogSubmitType: riskType,
            inputWidth: getInputWidth(authFormProps),
            verifyCodeInputType: getVerifyCodeInputType(authFormProps),
            keyOfAuthErrorMessageObject: currentKeyOfErrorMessageObject
          }} />
        }]
      }} />
    </SubAuthFormWrapper>
  </>;
}
