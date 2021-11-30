import React, {
  useEffect
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';

import toggleBodyClass from '../../../util/toggle-body-class';

const GlobalStyleHasTopNav = createGlobalStyle`
  /* stylelint-disable selector-class-pattern */
  body.hasTopbar {
    margin-top: 0;
    padding-top: ${SIZE.HEIGHT_TOP_NAV}px !important;
  }
`;

export default function GlobalStyle(): JSX.Element {
  useEffect(() => {
    toggleBodyClass();
    
    return () => toggleBodyClass(false);
  }, []);
  
  return <GlobalStyleHasTopNav />;
}
