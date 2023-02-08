import React from 'react';

import {
  DIRECTIVE
} from '../const';
import Demo from '../_demo';

export default function DemoDirective(): JSX.Element {
  return <Demo {...{
    source: DIRECTIVE
  }} />;
}
