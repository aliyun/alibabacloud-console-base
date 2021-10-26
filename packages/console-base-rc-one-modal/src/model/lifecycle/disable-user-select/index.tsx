import React from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  useRndStateExtra
} from '../../hook';

const UserSelectNone = createGlobalStyle`
  body {
    user-select: none;
  }
`;

/**
 * 移动和拖拽的时候禁用浏览器的 user-select 以免在界面上出现闪动的情况（尤其是 Safari）
 */
export default function DisableUserSelect(): JSX.Element | null {
  const {
    moving
  } = useRndStateExtra();
  
  return moving ? <UserSelectNone /> : null;
}