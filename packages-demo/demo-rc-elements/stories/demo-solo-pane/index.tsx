import React from 'react';

import {
  SoloPane
} from '../../src';

export default function DemoSoloPane(): JSX.Element {
  return <SoloPane demo={<div>demo</div>}>
    <code>SoloPane</code> 用于调试某类组件，左侧是调试区域，右侧是 demo 展示区域。
  </SoloPane>;
}
