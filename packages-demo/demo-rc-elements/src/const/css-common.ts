import {
  css
} from 'styled-components';

export const CSS_FONT_FAMILY = css`
  font-family: 'PingFang SC', 'Hiragino Sans GB', Helvetica, Arial, sans-serif;
`;

export const CSS_INLINE_ELEMENTS_INSIDE = css`
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
    margin: 0 0.1em;
    padding: 0.1em 0.6em;
    border: 1px solid #c4cdd7;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #fff inset;
    background-color: #e9ecee;
    font: 600 11px/1.4 Arial, 'Helvetica Neue', Helvetica, sans-serif;
    white-space: nowrap;
    color: #333;
  }
`;

/**
 * 对 block 元素极其内部的 inline 元素增加统一的样式
 */
export const CSS_BLOCK_LEVEL_ELEMENT = css`
  margin: 1em 0 0.5em 0;
  line-height: 1.5;
  ${CSS_FONT_FAMILY}
  ${CSS_INLINE_ELEMENTS_INSIDE}
  
  &:first-child {
    margin-top: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;
