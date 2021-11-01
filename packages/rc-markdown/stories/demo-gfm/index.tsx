import React from 'react';

import {
  GFM
} from '../const';
import Demo from '../_demo';

export default function DemoGfm(): JSX.Element {
  return <Demo {...{
    source: GFM
  }} />;
}
