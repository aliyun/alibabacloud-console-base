import React from 'react';

import type {
  TabProps
} from '@alicloud/console-base-rc-tabs';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  TSubIdentityServiceData
} from '../../types';
import {
  ESubIdentityServiceType
} from '../../enum';
import intl from '../../intl';
import U2fAuth from '../u2f-auth-or-bind';

import MfaBind from './mfa-bind';
import VmfaAuth from './vmfa-auth';
import SmsOrEmailAuth from './sms-or-email-auth';

export default function getSubAuthValidatorsTabs(subIdentityServiceData?: TSubIdentityServiceData): TabProps[] {
  if (subIdentityServiceData?.dataType !== ESubIdentityServiceType.GET_VERIFICATION_INFO_TO_AUTH) {
    return [];
  }

  const tabsViaDataMapping = subIdentityServiceData.data.verificationOrBindValidators.map<TabProps | null>(o => {
    const getTabPropWithDefaultValue = (props: Omit<TabProps, 'key' | 'closable'>): TabProps => ({
      ...props,
      closable: false,
      key: o.deviceType
    });

    switch (o.deviceType) {
      case 'bind_mfa':
        return getTabPropWithDefaultValue({
          title: intl('title:sub:mfa:bind'),
          content: <MfaBind />
        });
      case ESubVerificationDeviceType.SMS:
        return getTabPropWithDefaultValue({
          title: intl('title:sms_auth'),
          content: <SmsOrEmailAuth deviceType={ESubVerificationDeviceType.SMS} />
        });
      case ESubVerificationDeviceType.EMAIL:
        return getTabPropWithDefaultValue({
          title: intl('title:email_auth'),
          content: <SmsOrEmailAuth deviceType={ESubVerificationDeviceType.EMAIL} />
        });
      case ESubVerificationDeviceType.VMFA:
        return getTabPropWithDefaultValue({
          title: intl('title:sub_vmfa_auth'),
          content: <VmfaAuth />
        });
      case ESubVerificationDeviceType.U2F:
        return getTabPropWithDefaultValue({
          title: intl('title:sub_u2f_auth'),
          content: <U2fAuth type="u2f_auth" />
        });
      default:
        return null;
    }
  });

  return tabsViaDataMapping.filter(tab => Boolean(tab)) as TabProps[];
}