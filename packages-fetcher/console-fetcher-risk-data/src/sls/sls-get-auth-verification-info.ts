import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubVerificationDeviceType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsGetAuthVerificationInfoProps extends ISlsCommonProps {
  deviceCount?: number;
  deviceList?: string;
  firstChoiceDevice?: ESubVerificationDeviceType;
}

export default function slsGetAuthVerificationInfo(slsProps: ISlsGetAuthVerificationInfoProps): void {
  sls(ESlsTopic.SUB_GET_AUTH_VERIFICATION_INFO, slsProps);
}
