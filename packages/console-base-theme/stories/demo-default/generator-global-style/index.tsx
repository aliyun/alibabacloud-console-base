import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeGlobalStyle from '../util/generate-code-global-style';

export default function GeneratorGlobalStyle(): JSX.Element {
  return <>
    <H1>src/theme-default/global-style.ts</H1>
    <Pre>{generateCodeGlobalStyle()}</Pre>
  </>;
}
