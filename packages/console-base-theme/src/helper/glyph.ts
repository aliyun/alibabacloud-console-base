import {
  css
} from 'styled-components';

interface IGlobalFontFace {
  projectId: string;
  hash: string;
  dataUrl?: string; // 如果传入，它将被用于 woff2，否则 woff2 还会是一个 url
}

interface IIE8Style {
  styleSheet: {
    cssText: string;
  }
}

/**
 * 在 header 上注入 font face 全局样式，并返回 font-family 名字
 * IOS4 not supported
 */
export function injectGlobalFontFace({
  projectId,
  hash,
  dataUrl
}: IGlobalFontFace): string {
  const fontFamily = `font_${projectId}_${hash}`; // iconfont.cn 产出的路径，我们拿它来做 font-family 名字
  const existedStyleElement = document.getElementById(fontFamily);
  
  if (existedStyleElement && existedStyleElement.tagName === 'SCRIPT') { // 避免多次注入
    return fontFamily;
  }
  
  const iconfontUrl = `//at.alicdn.com/t/${fontFamily}`;
  const fontFace = `@font-face {
  font-family: ${fontFamily};
  src: url(${iconfontUrl}.eot);
  src: url(${iconfontUrl}.eot#iefix) format('embedded-opentype'),
    url(${dataUrl || `${iconfontUrl}.woff2`}) format('woff2'),
    url(${iconfontUrl}.woff) format('woff'),
    url(${iconfontUrl}.ttf) format('truetype');
}`;
  
  // styled-component 提供了 createGlobalStyle，取消了 injectGlobal，但后者是这边想要的...
  const head: HTMLHeadElement = document.head || document.getElementsByTagName('head')[0];
  const style: HTMLStyleElement = document.createElement('style');
  
  style.id = fontFamily;
  head.appendChild(style);
  
  if ((style as unknown as IIE8Style).styleSheet) { // This is required for IE8 and below
    (style as unknown as IIE8Style).styleSheet.cssText = fontFace;
  } else {
    style.appendChild(document.createTextNode(fontFace));
  }
  
  return fontFamily;
}

// TODO 晚些杀了
export const base = css`
  &:before {
    display: inline-block;
    line-height: 1;
    font-size: inherit;
    font-weight: 200;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: baseline;
    text-rendering: auto;
    transition: all 200ms ease;
    -webkit-text-stroke-width: 0.2px;
  }
`;
