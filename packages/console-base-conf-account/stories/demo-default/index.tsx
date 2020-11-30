import React from 'react';

import {
  PreJson
} from '@alicloud/demo-rc-elements';

import CONF_ACCOUNT from '../../src';

export default function DemoDefault(): JSX.Element {
  return <PreJson {...{
    headnote: 'CONF_ACCOUNT',
    o: CONF_ACCOUNT
  }} />;
}
