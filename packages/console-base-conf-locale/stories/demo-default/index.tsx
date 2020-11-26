import React from 'react';

import {
  H1,
  CleanJson
} from '@alicloud/demo-rc-elements';

import CONF_LOCALE from '../../src';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>CONF_LOCALE</H1>
    <CleanJson o={CONF_LOCALE} />
  </>;
}
