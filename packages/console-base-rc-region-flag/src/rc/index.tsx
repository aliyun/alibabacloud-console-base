import React from 'react';
import styled from 'styled-components';

import {
  IRegionFlagProps
} from '../types';

import SvgInner from './svg-inner';

const ScFlag = styled.i`
  display: inline-block;
  vertical-align: middle;
  
  svg {
    display: block;
    border: 1px solid rgba(204, 204, 204, 0.4);
  }
`;

/**
 * 将 regionId 转成国旗（区旗）图标
 * 
 * 所有的 SVG 均来自 www.iconfont.cn，需要对原 SVG 进行编辑，转成 W20H14 大小，然后去 https://jakearchibald.github.io/svgomg/ 优化
 */
export default function RegionFlag({
  regionId,
  ...props
}: IRegionFlagProps): JSX.Element {
  return <ScFlag {...props}>
    <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
      <SvgInner regionId={regionId} />
    </svg>
  </ScFlag>;
}
