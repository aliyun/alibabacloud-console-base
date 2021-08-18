import React from 'react';

import {
  PreJson
} from '@alicloud/demo-rc-elements';

import parseConfLocale from '../../src';

export default function DemoDefault(): JSX.Element {
  return <PreJson o={parseConfLocale()} />;
}