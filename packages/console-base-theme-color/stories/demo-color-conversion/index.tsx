import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import RgbaToRgb from './rgba-to-rgb';
import RgbToRgba from './rgb-to-rgba';

/**
 * RGB ↔ RGBA 互换
 */
export default function DemoColorConversion(): JSX.Element {
  return <>
    <H1>颜色计算</H1>
    <RgbaToRgb />
    <RgbToRgba />
  </>;
}

