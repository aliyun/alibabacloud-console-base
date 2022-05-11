import React from 'react';

import {
  FULL
} from '../const';
import Demo from '../_demo';

export default function DemoDefault(): JSX.Element {
  return <Demo {...{
    source: FULL
  }} />;
}
