import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  TTypeOfPrimaryButton
} from '../../types';
import {
  EConvertedVerifyType
} from '../../enum';
import {
  WINDVANE_AVAILABLE,
  BUILT_IN_RISK_CONFIG
} from '../../const';
import intl from '../../intl';
import type {
  TDialogSubmitType,
  TVerifyCodeInputType
} from '../../rc/verify-code-input';
import type {
  TSubAuthFormWrapperProps
} from '../../rc/sub-auth-form-wrapper';
import {
  intlVerifyLabel,
  intlVerifySetting,
  getSubVerificationSettingUrl
} from '../../utils';

import {
  TAuthFormProps
} from './type';

interface IGetVerifyUrlProps {
  accountId: string;
  authFormProps: TAuthFormProps;
}

function getIsMainAccount(props: TAuthFormProps): boolean {
  if (props.formType === 'old_main') {
    return true;
  }

  if (props.accountType === EAccountType.MAIN) {
    return true;
  }

  return false;
}

// 获取表单项信息说明的 Label
export function getVerifyLabel(props: TAuthFormProps): string {
  if (props.formType === 'old_main') {
    return intlVerifyLabel(props.convertedVerifyType);
  }

  // 子账号风控，Vmfa 类型时 Label 是用户名
  if (props.verifyType === ESubVerificationDeviceType.VMFA) {
    return intl('attr:vmfa_auth_userName');
  }

  return intlVerifyLabel(props.verifyType);
}

// 获取表单验证码说明的 Label
export function getVerifySettingLabel(props: TAuthFormProps): string {
  if (props.formType === 'old_main') {
    return intlVerifySetting(props.convertedVerifyType);
  }

  return intlVerifySetting(props.verifyType);
}

// 获取 VerifyCodeInput 的类型
export function getVerifyCodeInputType(props: TAuthFormProps): TVerifyCodeInputType {
  if (props.formType === 'mpk_or_sub_identity') {
    return props.verifyType === ESubVerificationDeviceType.VMFA ? 'vmfa_auth' : 'sms_or_email_auth';
  }

  return props.convertedVerifyType === EConvertedVerifyType.MFA ? 'vmfa_auth' : 'sms_or_email_auth';
}

// 获取当前 Form 对应的类型：旧版主账号验证、新版 Vmfa/U2f/Sms/Email 验证
export function getCurrentPrimaryButtonType(props: TAuthFormProps): TTypeOfPrimaryButton {
  if (props.formType === 'old_main') {
    return 'mainAccount';
  }

  if (props.accountType === EAccountType.MAIN) {
    return 'mainAccount';
  }

  return props.verifyType;
}

// 获取当前确定按钮提交时，触发的提交函数类型
export function getDialogSubmitType(props: TAuthFormProps): TDialogSubmitType {
  if (props.formType === 'old_main') {
    return 'old_main_or_downgrade_mpk';
  }

  return props.accountType === EAccountType.MAIN ? 'new_mpk' : 'new_sub';
}

// 获取设置手机、邮箱、MFA（仅主账号）的链接。主账号：账号中心，子账号：用户详情页
export function getVerifySettingUrl({
  accountId,
  authFormProps
}: IGetVerifyUrlProps): string {
  const isMainAccount = getIsMainAccount(authFormProps);

  if (isMainAccount) {
    return BUILT_IN_RISK_CONFIG.urlSetting;
  }

  return getSubVerificationSettingUrl(accountId);
}

export function getSubAuthFormWrapperProps(props: TAuthFormProps): TSubAuthFormWrapperProps {
  if (props.formType === 'old_main') {
    return {
      accountType: EAccountType.MAIN
    };
  }

  if (props.accountType === EAccountType.MAIN) {
    return {
      accountType: EAccountType.MAIN
    };
  }

  return {
    accountType: EAccountType.SUB,
    deviceType: props.verifyType
  };
}

export function getInputWidth(props: TAuthFormProps): string | number {
  if (props.formType === 'mpk_or_sub_identity' && props.verifyType === ESubVerificationDeviceType.VMFA) {
    return WINDVANE_AVAILABLE ? '60%' : 180;
  }

  return 150;
}