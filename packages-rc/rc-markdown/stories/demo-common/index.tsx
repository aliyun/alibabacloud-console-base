import React from 'react';

import {
  COMMON
} from '../const';
import Demo from '../_demo';

export default function DemoCommon(): JSX.Element {
  return <Demo {...{
    source: COMMON
  }} />;
}
