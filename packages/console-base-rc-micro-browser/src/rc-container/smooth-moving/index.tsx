import React from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  useRndStateExtra
} from '../../model';

const StyleForSmoothMoving = createGlobalStyle`
  iframe {
    pointer-events: none;
  }
  
  body {
    user-select: none;
  }
`;

/**
 * 让拖拽更顺溜：
 *
 * 1. 禁用浏览器的 user-select，以免在界面上出现闪动（尤其是 Safari）
 * 2. 让 iframe 鼠标穿透，以免经常无法拖动
 */
export default function SmoothMoving(): JSX.Element | null {
  const {
    moving
  } = useRndStateExtra();
  
  return moving ? <StyleForSmoothMoving /> : null;
}