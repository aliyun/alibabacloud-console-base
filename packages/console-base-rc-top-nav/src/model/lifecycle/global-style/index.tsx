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

const BODY_CLASS = 'hasTopbar';

const GlobalStyleHasTopNav = createGlobalStyle`
  body.hasTopbar {
    margin-top: 0;
    padding-top: ${SIZE.HEIGHT_TOP_NAV}px !important;
  }
`;

export default function GlobalStyle(): JSX.Element {
  useEffect(() => {
    addClass(document.body, BODY_CLASS);
    
    return () => removeClass(document.body, BODY_CLASS);
  }, []);
  
  return <GlobalStyleHasTopNav />;
}
