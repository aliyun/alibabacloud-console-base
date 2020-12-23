import React, {
  useEffect
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import {
  addClass,
  removeClass
} from '@alicloud/mere-dom';

import {
  useProps
} from '../../hook';

const DEFAULT_BODY_CLASS = 'hasTopbar'; // 尽量不要改

export default function GlobalStyle(): JSX.Element {
  const {
    bodyClass = DEFAULT_BODY_CLASS
  } = useProps();
  
  // 不能用 useMemo 裹起来，否则会报错如下：
  // Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function.
  const TheGlobalStyle = createGlobalStyle`
    body.${bodyClass} {
      margin-top: 0;
      padding-top: ${SIZE.HEIGHT_TOP_NAV}px !important;
    }
  `;
  
  useEffect(() => {
    addClass(document.body, bodyClass);
    
    return () => removeClass(document.body, bodyClass);
  }, [bodyClass]);
  
  return <TheGlobalStyle />;
}
