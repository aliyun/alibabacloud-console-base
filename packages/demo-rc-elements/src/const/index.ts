import {
  css
} from 'styled-components';

export const FORM_INPUT_HEIGHT = 28;
export const FORM_INPUT_BDC = '#eee';
export const FORM_INPUT_BDC_HOVER = '#ccc';
export const FORM_INPUT_BDC_FOCUS = '#c9f';
export const FORM_BUTTON_BDC = 'transparent';
export const FORM_BUTTON_BDC_HOVER = FORM_INPUT_BDC_HOVER;
export const FORM_BUTTON_BDC_ACTIVE = '#eee';
export const FORM_BUTTON_BGC = '#eee';
export const FORM_BUTTON_BGC_HOVER = '#f7f7f7';
export const FORM_BUTTON_BGC_ACTIVE = '#eee';

export const CSS_FONT_FAMILY = css`
  font-family: 'PingFang SC', 'Hiragino Sans GB', Helvetica, Arial, sans-serif;
`;

export const CSS_BLOCK_LEVEL_ELEMENT = css`
  margin: 1em 0 0.5em 0;
  line-height: 1.5;
  ${CSS_FONT_FAMILY};
  
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

export const CSS_INPUT_COMMON = css`
  margin: 1px;
  padding: 0 8px;
  border: 1px solid ${FORM_INPUT_BDC};
  box-sizing: border-box;
  outline: none;
  line-height: ${FORM_INPUT_HEIGHT}px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    border-color: ${FORM_INPUT_BDC_HOVER};
  }
  
  &:focus {
    border-color: ${FORM_INPUT_BDC_FOCUS};
  }
`;
