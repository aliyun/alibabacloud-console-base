import React from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Flex from '@alicloud/console-base-rc-flex';

import {
  TAuthFormProps,
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  EIconType,
  ERiskType
} from '../../enum';
import {
  BUILT_IN_RISK_CONFIG
} from '../../const';
import {
  useModelProps
} from '../../model';
import {
  useAuthFormGenerateProps,
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
} from '../../utils';

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

export default function VerifyRiskForm(authFormProps: TAuthFormProps): JSX.Element {
  const {
    riskType, verifyType, verifyDetail
  } = authFormProps;
  const showVerifySettingUrlChangeButton = !(verifyDetail === ERiskType.NEW_SUB && verifyType === ESubVerificationDeviceType.VMFA);

  const {
    accountId
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
    generateProps,
    showSendCodeSuccessTip
  } = useAuthFormGenerateProps(authFormProps);

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
            {showVerifySettingUrlChangeButton && <Button {...{
              spm: `set-${authFormProps.verifyType}`,
              theme: ButtonTheme.TEXT_PRIMARY,
              label: riskType === ERiskType.OLD_MAIN ? intlVerifySetting(authFormProps.convertedVerifyType) : intlVerifySetting(authFormProps.verifyType),
              href: [ERiskType.MPK, ERiskType.OLD_MAIN].includes(riskType) ? BUILT_IN_RISK_CONFIG.urlSetting : getSubVerificationSettingUrl(accountId)
            }} />}
          </Flex>
        }, {
          label: intl('attr:code'),
          labelTextAlign: 'center',
          content: <VerifyCodeInput {...{
            generateProps,
            handleInputChange,
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