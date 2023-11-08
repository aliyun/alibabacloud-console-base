import {
  EAccountType,
  ESubVerificationDeviceType
} from '../../enum';

export enum EIvMessageType {
  IV_SUCCESS = 'iv_success',
  IV_CANCELLED = 'iv_cancelled',
  IV_LOAD_SUCCESS = 'iv_load_success',
  IV_CONTAINER_HEIGHT_MEASURED = 'iv_container_height_measured',
  IV_MESSAGE_ELEMENT_TOGGLE = 'iv_message_ele_toggle',
  IV_MULTIPLE_VALIDATORS = 'iv_validator_props'
}

export interface IIdentityVerificationResult {
  verifyCode: string;
  // 核身类型，ga/sms/email
  verifyType: string;
}

export interface IIdentityVerificationCancelledProps {
  accountType?: EAccountType;
  accountId?: string;
  isMpk?: boolean;
  mpkIsDowngrade?: boolean;
  errorCode?: string;
  errorMessage?: string;
  // verify_error & send_code_error 会有 verifyType 参数
  verifyType?: ESubVerificationDeviceType;
  // 核身页面定义中定义的非预期错误
  unexpectedErrorType?: string;
}

// identity 核身页面对外抛出的消息
export type TMessageFromIdentityVerificationPage = {
  type: EIvMessageType.IV_SUCCESS;
  data: IIdentityVerificationResult;
} | {
  type: EIvMessageType.IV_CANCELLED;
  data: IIdentityVerificationCancelledProps;
} | {
  // Identity Verification 加载成功后回对外抛出消息
  type: EIvMessageType.IV_LOAD_SUCCESS;
} | {
  type: EIvMessageType.IV_CONTAINER_HEIGHT_MEASURED;
  data: {
    height: number;
  };
} | {
  type: EIvMessageType.IV_MESSAGE_ELEMENT_TOGGLE;
  data: {
    visible: boolean;
  };
} | {
  type: EIvMessageType.IV_MULTIPLE_VALIDATORS;
  data: {
    isMultipleValidators: boolean;
    deviceType?: ESubVerificationDeviceType[];
  };
}

// dialog data
export interface IIvPageDialogData {
  ivPageLoadSuccess?: boolean;
  isMultipleValidators?: boolean;
  deviceType?: ESubVerificationDeviceType[];
}