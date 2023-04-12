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
