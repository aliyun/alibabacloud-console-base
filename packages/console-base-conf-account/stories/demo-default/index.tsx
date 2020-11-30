import React from 'react';

import {
  CleanJson
} from '@alicloud/demo-rc-elements';

import CONF_ACCOUNT from '../../src';

export default function DemoDefault(): JSX.Element {
  return <CleanJson {...{
    caption: 'CONF_ACCOUNT',
    o: CONF_ACCOUNT
  }} />;
}
