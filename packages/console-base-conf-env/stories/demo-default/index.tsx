import React from 'react';

import {
  CleanJson
} from '@alicloud/demo-rc-elements';

import CONF_ENV from '../../src';

export default function DemoDefault(): JSX.Element {
  return <CleanJson {...{
    caption: 'CONF_ENV',
    o: CONF_ENV
  }} />;
}
