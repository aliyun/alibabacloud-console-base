import React from 'react';

import {
  PreJson
} from '@alicloud/demo-rc-elements';

import parseLocale from '../../src';

export default function DemoDefault(): JSX.Element {
  return <PreJson o={parseLocale()} />;
}