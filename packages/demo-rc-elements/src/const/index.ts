import {
  css
} from 'styled-components';

export const FORM_CONTROL_HEIGHT = 32;
export const FORM_CONTROL_FGC_DISABLED = '#c0c6cc';
export const FORM_CONTROL_BDC = '#ddd';
export const FORM_CONTROL_BDC_HOVER = '#999';
export const FORM_CONTROL_BDC_ACTIVE = '#999';
export const FORM_CONTROL_BDC_FOCUS = '#66c';
export const FORM_CONTROL_BDC_DISABLED = '#f0f1f3';
export const FORM_CONTROL_BGC = '#f3f3f3';
export const FORM_CONTROL_BGC_HOVER = '#f3f3f3';
export const FORM_CONTROL_BGC_ACTIVE = '#f7f7f7';
export const FORM_CONTROL_BGC_DISABLED = '#f0f1f3';

export const CSS_FONT_FAMILY = css`
  font-family: 'PingFang SC', 'Hiragino Sans GB', Helvetica, Arial, sans-serif;
`;

export const CSS_FORM_CONTROL_BASE = css`
  margin: 1px;
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
