import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ERiskType,
  ESceneKey,
  EConvertedVerifyType
} from '../../enum';
import {
  TAuthFormProps
} from '../../types';
import {
  WINDVANE_AVAILABLE
} from '../../const';
import intl from '../../intl';
import {
  TVerifyCodeInputType
} from '../../rc/verify-code-input';
import {
  TSubAuthFormWrapperProps
} from '../../rc/sub-auth-form-wrapper';
import {
  intlVerifyLabel
} from '../../util';

// 获取表单项信息说明的 Label
export function getVerifyLabel(props: TAuthFormProps): string {
  if (props.riskType === ERiskType.OLD_MAIN) {
    return intlVerifyLabel(props.convertedVerifyType);
  }

  // 子账号风控，Vmfa 类型时 Label 是用户名
  if (props.riskType === ERiskType.NEW_SUB && props.verifyType === ESubVerificationDeviceType.VMFA) {
    return intl('attr:vmfa_auth_userName');
  }

  return intlVerifyLabel(props.verifyType);
}

// 获取 VerifyCodeInput 的类型
export function getVerifyCodeInputType(props: TAuthFormProps): TVerifyCodeInputType {
  if (props.riskType === ERiskType.OLD_MAIN) {
    return props.convertedVerifyType === EConvertedVerifyType.MFA ? 'vmfa_auth' : 'sms_or_email_auth';
  }

  return props.verifyType === ESubVerificationDeviceType.VMFA ? 'vmfa_auth' : 'sms_or_email_auth';
}

export function getSubAuthFormWrapperProps(props: TAuthFormProps): TSubAuthFormWrapperProps {
  if (props.riskType === ERiskType.NEW_SUB) {
    return {
      accountType: EAccountType.SUB,
      deviceType: props.verifyType
    };
  }

  return {
    accountType: EAccountType.MAIN
  };
}

export function getInputWidth(props: TAuthFormProps): string | number {
  if ([ERiskType.NEW_MAIN, ERiskType.NEW_SUB].includes(props.riskType) && props.verifyType === ESubVerificationDeviceType.VMFA) {
    return WINDVANE_AVAILABLE ? '60%' : 180;
  }

  return 150;
}

export function getCurrentKeyOfErrorMessageObject(props: TAuthFormProps): ESceneKey.MAIN_ACCOUNT | ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.VMFA {
  if (props.riskType === ERiskType.NEW_SUB) {
    return props.verifyType;
  }

  return ESceneKey.MAIN_ACCOUNT;
}
