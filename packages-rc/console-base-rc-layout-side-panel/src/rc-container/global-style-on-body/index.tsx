import React from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  SIZE,
  Z_INDEX
} from '@alicloud/console-base-theme';

import {
  BODY_CLASS_WITH_SIDE_PANEL
} from '../../model';

const GlobalStyle = createGlobalStyle`
  /* stylelint-disable selector-class-pattern */
  body.${BODY_CLASS_WITH_SIDE_PANEL} {
    padding-right: ${SIZE.WIDTH_SIDE_PANEL}px;
    transition: padding-right ease-in-out 250ms;
    
    .viewFramework-body {
      right: ${SIZE.WIDTH_SIDE_PANEL}px;
      left: 0;
      z-index: ${Z_INDEX.SIDE_PANEL - 1};
      width: auto !important;
    }
  }
`;

export default function GlobalStyleOnBody(): JSX.Element {
  return <GlobalStyle />;
}
