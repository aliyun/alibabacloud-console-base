import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import generateCodeGlobalStyle from '../../util/generate-code-global-style';

export default function GeneratorGlobalStyle(): JSX.Element {
  return <>
    <H1>src/util/create-theme-global-style.ts</H1>
    <CodeViewerTs>{generateCodeGlobalStyle()}</CodeViewerTs>
  </>;
}
