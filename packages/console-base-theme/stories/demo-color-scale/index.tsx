import React from 'react';
import {
  hsl
} from 'polished';

const COLOR_CORE = '#0064C8';

/**
 * 参考：https://done.alibaba-inc.com/file/npMfevdSB70K/nraBotmHA4yO7cyO/preview?categoryId=bqTzhdSLVELC
 * 
 * 控制台色阶基于 HSL 色彩模型 - 色相 Hue / 饱和度 Saturation / 明度 Lightness
 * - 360º 色相，默认每 10º 为一个节点，基础色相共 36 阶
 * - 饱和度范围 0%-100%，默认所有颜色 100% 饱和度
 * - 明度参数 0%-100%，起始明度为 19%，以 10% 递增，最高明度 89%，共 8 阶
 * 
 * 控制台核心色：
 * - HEX = #0064C8
 * - RGB = 0/100/200
 * - HSL = 210º/100%/39%
 * - HSV = 210º/100º/78º
 * - CMYK = 1.00/0.50/0.00/0.22
 */
export default function DemoColorScale(): JSX.Element {
  return <>
    {hsl()}
  </>;
}

