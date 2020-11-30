import React from 'react';

import {
  PreJson
} from '@alicloud/demo-rc-elements';

import CONF_ENV from '../../src';

export default function DemoDefault(): JSX.Element {
  return <PreJson {...{
    caption: 'CONF_ENV',
    o: CONF_ENV
  }} />;
}
