import {
  createGlobalStyle
} from 'styled-components';

/**
 * 用于 demo 的极微 normalize
 * 
 * - body 字体（跟 console-base-theme 保持一致）
 * - 增加 a:link 样式用于测试组件中 a 元素的样式是否够强
 */
export default createGlobalStyle`
  body {
    padding: 0;
    font: 12px/1.5 -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  ul,
  ol {
    list-style: none;
  }
  
  a:link {
    color: #369;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  a:visited {
    color: #b8860b;
  }
`;