import type {
  TabProps
} from '@alicloud/console-base-rc-tabs';

import {
  TSubGetVerificationToAuthData
} from '../../../types';

import getSubAuthValidatorsTitle from './get-sub-auth-validators-title';
import getSubAuthValidatorsContent from './get-sub-auth-validators-content';

export default function getSubAuthValidatorsTabs(subGetVerificationToAuthData?: TSubGetVerificationToAuthData): TabProps[] {
  if (!subGetVerificationToAuthData) {
    return [];
  }

  const tabsViaDataMapping = subGetVerificationToAuthData.verificationOrBindValidators.map<TabProps>(o => {
    return {
      closable: false,
      key: o.deviceType,
      title: getSubAuthValidatorsTitle(o),
      content: getSubAuthValidatorsContent(o)
    };
  });

  return tabsViaDataMapping.filter(tab => Boolean(tab)) as TabProps[];
}