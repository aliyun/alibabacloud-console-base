// generated by generate-code-mixin-reset.ts

import {
  css
} from 'styled-components';

import {
  COLOR
} from '../var';

export const mixinInputReset = css`
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  transition: all ease-in-out 0.3s;
  
  &::placeholder {
    font-size: 12px;
    font-weight: 200;
    color: ${COLOR.INPUT_PLACEHOLDER};
    color: var(--cb-color-input-placeholder, ${COLOR.INPUT_PLACEHOLDER});
  }
  
  &::-ms-clear {
    display: none;
  }
`;

/**
 * 对按钮样式进行重置：
 * 
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 避免 link hover 的样式干扰
 * 4. 定义 disabled 的基础样式
 */
export const mixinButtonReset = css`
  padding: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background: none;
  line-height: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all ease-out 0.3s;
  
  &:hover,
  &:link:hover {
    text-decoration: none;
  }
  
  &:focus-visible {
    outline: 1px solid ${COLOR.BORDER_ACCENT_HOVER};
  }
  
  &[disabled] {
    cursor: not-allowed;
  }
`;
