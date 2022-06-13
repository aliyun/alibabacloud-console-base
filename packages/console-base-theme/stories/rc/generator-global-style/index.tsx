import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeGlobalStyle
} from '../../util';

export default function GeneratorGlobalStyle(): JSX.Element {
  return <>
    <H1>generateCodeGlobalStyle</H1>
    <CodeViewerTs>{generateCodeGlobalStyle()}</CodeViewerTs>
  </>;
}
