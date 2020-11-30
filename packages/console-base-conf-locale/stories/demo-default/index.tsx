import React from 'react';

import {
  CleanJson
} from '@alicloud/demo-rc-elements';

import CONF_LOCALE from '../../src';

export default function DemoDefault(): JSX.Element {
  return <CleanJson {...{
    caption: 'CONF_LOCALE',
    o: CONF_LOCALE
  }} />;
}
