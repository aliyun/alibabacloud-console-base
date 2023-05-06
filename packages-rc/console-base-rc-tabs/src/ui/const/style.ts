import {
  css
} from 'styled-components';

import {
  mixinTextAccent
} from '@alicloud/console-base-theme';

import {
  BGC_TAB_ACTIVE,
  BGC_TAB_ACTIVE_DARK,
  BGC_TAB_IDLE,
  FGC_TAB_ACTIVE,
  FGC_TAB_ACTIVE_DARK,
  FGC_TAB_IDLE,
  FGC_TAB_IDLE_HOVER
} from './values';

export const CSS_TAB_BUTTON_THEME_PLAIN_NORMAL = css`
  &:hover {
    ${mixinTextAccent}
  }
`;

export const CSS_TAB_BUTTON_THEME_PLAIN_ACTIVE = mixinTextAccent;

export const CSS_TAB_BUTTON_THEME_INVERSE_NORMAL = css`
  background-color: ${BGC_TAB_IDLE};
  color: ${FGC_TAB_IDLE};
  
  &:hover {
    color: ${FGC_TAB_IDLE_HOVER};
  }
`;

export const CSS_TAB_BUTTON_THEME_INVERSE_ACTIVE = css`
  background-color: ${BGC_TAB_ACTIVE};
  color: ${FGC_TAB_ACTIVE};
  
  .theme-dark && {
    background-color: ${BGC_TAB_ACTIVE_DARK};
    color: ${FGC_TAB_ACTIVE_DARK};
  }
`;