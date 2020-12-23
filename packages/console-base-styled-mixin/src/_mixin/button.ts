import {
  css
} from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';

/**
 * 对按钮样式进行重置：
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 定义 disabled 的基础样式
 */
export const reset = css`
  padding: 0;
  border: none;
  box-sizing: border-box;
  outline: medium;
  background: none;
  line-height: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-out;
  
  &:hover {
    text-decoration: none;
  }
  
  &[disabled] {
    cursor: not-allowed;
    
    &,
    &:hover {
      color: var(--cb-color-text-disabled, ${COLOR.TEXT_DISABLED}) !important;
    }
  }
`;
