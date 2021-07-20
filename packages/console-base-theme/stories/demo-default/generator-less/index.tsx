import React from 'react';

import {
  H1,
  CodeViewerLess
} from '@alicloud/demo-rc-elements';

import generateCodeCssVars from '../../util/generate-code-css-vars';

export default function GeneratorLess(): JSX.Element {
  return <>
    <H1>doc/css/console-base.less</H1>
    <CodeViewerLess>{generateCodeCssVars()}</CodeViewerLess>
  </>;
}
