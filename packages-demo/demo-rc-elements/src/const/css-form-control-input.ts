import {
  css
} from 'styled-components';

import {
  COLOR_FORM_CONTROL,
  COLOR_FORM_CONTROL_DARK
} from './color-rc';
import {
  PADDING_FORM_CONTROL_HORIZONTAL,
  HEIGHT_FORM_CONTROL
} from './values';
import {
  CSS_FONT_FAMILY
} from './css-common';

const CSS_FORM_CONTROL_BASE = css`
  padding: 0 ${PADDING_FORM_CONTROL_HORIZONTAL}px;
  border: 1px solid ${COLOR_FORM_CONTROL.BDC};
  box-sizing: border-box;
  outline: none;
  line-height: ${HEIGHT_FORM_CONTROL}px;
  font-size: 11px;
  color: ${COLOR_FORM_CONTROL.FGC};
  transition: all 0.3s ease-in-out;
  ${CSS_FONT_FAMILY}
  
  .theme-dark & {
    border-color: ${COLOR_FORM_CONTROL_DARK.BDC};
    background-color: ${COLOR_FORM_CONTROL_DARK.BGC};
    color: ${COLOR_FORM_CONTROL_DARK.FGC};
  }
  
  &:hover {
    border-color: ${COLOR_FORM_CONTROL.BDC_HOVER};
    
    .theme-dark & {
      border-color: ${COLOR_FORM_CONTROL_DARK.BDC_HOVER};
    }
  }
  
  &:focus {
    border-color: ${COLOR_FORM_CONTROL.BDC_FOCUS};
    outline: none;
    
    .theme-dark & {
      border-color: ${COLOR_FORM_CONTROL_DARK.BDC_FOCUS};
    }
  }
  
  &:active {
    border-color: ${COLOR_FORM_CONTROL.BDC_ACTIVE};
    
    .theme-dark & {
      border-color: ${COLOR_FORM_CONTROL_DARK.BDC_ACTIVE};
    }
  }
  
  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus {
    border-color: ${COLOR_FORM_CONTROL.BDC_DISABLED};
    background-color: ${COLOR_FORM_CONTROL.BGC_DISABLED};
    color: ${COLOR_FORM_CONTROL.FGC_DISABLED};
    
    .theme-dark & {
      border-color: ${COLOR_FORM_CONTROL_DARK.BDC_DISABLED};
      background-color: ${COLOR_FORM_CONTROL_DARK.BGC_DISABLED};
      color: ${COLOR_FORM_CONTROL_DARK.FGC_DISABLED};
    }
  }
`;

const CSS_FORM_CONTROL_OVERRIDE_INPUT = css`
  padding: 0 ${PADDING_FORM_CONTROL_HORIZONTAL}px;
`;

const CSS_FORM_CONTROL_OVERRIDE_TEXTAREA = css`
  display: block;
  padding: 4px ${PADDING_FORM_CONTROL_HORIZONTAL}px;
  width: 100%;
  min-height: 100px;
  line-height: 1.8;
  resize: vertical;
`;

const CSS_FORM_CONTROL_OVERRIDE_BUTTON = css`
  border-radius: 4px;
  background-color: ${COLOR_FORM_CONTROL.BGC};
  min-width: 60px;
  cursor: pointer;
  
  .theme-dark & {
    background-color: ${COLOR_FORM_CONTROL_DARK.BGC};
  }
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${COLOR_FORM_CONTROL.BGC_HOVER};
    
    .theme-dark & {
      background-color: ${COLOR_FORM_CONTROL_DARK.BGC_HOVER};
    }
  }
  
  &:active {
    box-shadow: none;
    background-color: ${COLOR_FORM_CONTROL.BGC_ACTIVE};
    
    .theme-dark & {
      background-color: ${COLOR_FORM_CONTROL_DARK.BGC_ACTIVE};
    }
  }
  
  &[disabled],
  &[disabled]:hover,
  &[disabled]:active,
  &[disabled]:focus {
    border-color: ${COLOR_FORM_CONTROL.BDC_DISABLED};
    box-shadow: none;
    background-color: ${COLOR_FORM_CONTROL.BGC_DISABLED};
    cursor: default;
    color: ${COLOR_FORM_CONTROL.FGC_DISABLED};
    
    .theme-dark & {
      border-color: ${COLOR_FORM_CONTROL_DARK.BDC_DISABLED};
      background-color: ${COLOR_FORM_CONTROL_DARK.BGC_DISABLED};
      color: ${COLOR_FORM_CONTROL_DARK.FGC_DISABLED};
    }
  }
`;

export const CSS_FORM_CONTROL_INPUT_BASE = css`
  margin: 1px 1px 1px 0;
  ${CSS_FORM_CONTROL_BASE}
  ${CSS_FORM_CONTROL_OVERRIDE_INPUT}
`;

export const CSS_FORM_CONTROL_INPUT_TEXTAREA = css`
  ${CSS_FORM_CONTROL_BASE}
  ${CSS_FORM_CONTROL_OVERRIDE_TEXTAREA}
`;

export const CSS_FORM_CONTROL_BUTTON = css`
  margin: 1px 1px 1px 0;
  ${CSS_FORM_CONTROL_BASE}
  ${CSS_FORM_CONTROL_OVERRIDE_BUTTON}
`;
