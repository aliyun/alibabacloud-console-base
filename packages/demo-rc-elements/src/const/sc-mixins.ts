import {
  css
} from 'styled-components';

import {
  FORM_CONTROL_BDC,
  FORM_CONTROL_HEIGHT,
  FORM_CONTROL_BDC_HOVER,
  FORM_CONTROL_BDC_ACTIVE,
  FORM_CONTROL_BDC_FOCUS,
  FORM_CONTROL_BDC_DISABLED,
  FORM_CONTROL_BGC,
  FORM_CONTROL_BGC_HOVER,
  FORM_CONTROL_BGC_ACTIVE,
  FORM_CONTROL_BGC_DISABLED,
  FORM_CONTROL_FGC_DISABLED
} from './values';

const CSS_FORM_CONTROL_OVERRIDE_INPUT = css`
  padding: 0 8px;
`;

const CSS_FORM_CONTROL_OVERRIDE_TEXTAREA = css`
  display: block;
  padding: 4px 8px;
  width: 100%;
  min-height: 100px;
  line-height: 1.8;
  resize: vertical;
`;

const CSS_FORM_CONTROL_OVERRIDE_BUTTON = css`
  border-radius: 4px;
  background-color: ${FORM_CONTROL_BGC};
  min-width: 60px;
  
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${FORM_CONTROL_BGC_HOVER};
  }
  
  &:active {
    box-shadow: none;
    background-color: ${FORM_CONTROL_BGC_ACTIVE};
  }
  
  &:focus {
    border-color: ${FORM_CONTROL_BDC_ACTIVE};
  }
  
  &[disabled],
  &[disabled]:hover,
  &[disabled]:active,
  &[disabled]:focus {
    border-color: ${FORM_CONTROL_BDC_DISABLED};
    box-shadow: none;
    background-color: ${FORM_CONTROL_BGC_DISABLED};
    color: ${FORM_CONTROL_FGC_DISABLED};
  }
`;

export const CSS_FONT_FAMILY = css`
  font-family: 'PingFang SC', 'Hiragino Sans GB', Helvetica, Arial, sans-serif;
`;

export const CSS_BLOCK_LEVEL_ELEMENT = css`
  margin: 1em 0 0.5em 0;
  line-height: 1.5;
  ${CSS_FONT_FAMILY}
  
  em {
    font-style: normal;
    color: #f60;
  }
  
  code {
    padding: 0 4px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.04);
    color: #39f;
  }
  
  strong {
    font-weight: 600;
  }
  
  kbd {
    display: inline-block;
    padding: 3px 5px;
    border: 1px solid #ccc;
    border-bottom-color: #999;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #999;
    background-color: #f3f3f3;
    line-height: 10px;
    font-size: 11px;
    color: #333;
  }
  
  &:first-child {
    margin-top: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CSS_FORM_CONTROL_BASE = css`
  padding: 0 12px;
  border: 1px solid ${FORM_CONTROL_BDC};
  box-sizing: border-box;
  outline: none;
  line-height: ${FORM_CONTROL_HEIGHT}px;
  font-size: 11px;
  transition: all 0.3s ease-in-out;
  ${CSS_FONT_FAMILY}
  
  &:hover {
    border-color: ${FORM_CONTROL_BDC_HOVER};
  }
  
  &:active {
    border-color: ${FORM_CONTROL_BDC_ACTIVE};
  }
  
  &:focus {
    border-color: ${FORM_CONTROL_BDC_FOCUS};
    outline: none;
  }
  
  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus {
    border-color: ${FORM_CONTROL_BDC_DISABLED};
    background-color: ${FORM_CONTROL_BGC_DISABLED};
    color: ${FORM_CONTROL_FGC_DISABLED};
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
