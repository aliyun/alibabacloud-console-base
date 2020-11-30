import React from 'react';

import {
  PreJson
} from '@alicloud/demo-rc-elements';

import CONF_LOCALE from '../../src';

export default function DemoDefault(): JSX.Element {
  return <PreJson {...{
    caption: 'CONF_LOCALE',
    o: CONF_LOCALE
  }} />;
}
