import {
  IInjectIconFontOptions
} from '../types';

interface IIe8Style {
  styleSheet: {
    cssText: string;
  };
}

export default function injectFont(fontFamily: string, options: IInjectIconFontOptions = {}): string {
  if (typeof document === 'undefined') { // for SSR
    return fontFamily;
  }
  
  const existedStyleElement = document.getElementById(fontFamily);
  
  if (existedStyleElement && existedStyleElement.tagName === 'STYLE') { // 避免多次注入
    return fontFamily;
  }
  
  const iconfontUrl = `//at.alicdn.com/t${options.pathExtra || ''}/${fontFamily}`;
  const fontFace = `@font-face {
  font-family: ${fontFamily};
  src: url(${iconfontUrl}.eot);
  src: url(${iconfontUrl}.eot#iefix) format('embedded-opentype'),
    url(${options.base64Data || `${iconfontUrl}.woff2`}) format('woff2'),
    url(${iconfontUrl}.woff) format('woff'),
    url(${iconfontUrl}.ttf) format('truetype');
}`;
  
  // styled-component 提供了 createGlobalStyle，取消了 injectGlobal，但后者是这边想要的...
  const head: HTMLHeadElement = document.head || document.getElementsByTagName('head')[0];
  const style: HTMLStyleElement = document.createElement('style');
  
  style.id = fontFamily;
  head.appendChild(style);
  
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if ((style as unknown as IIe8Style).styleSheet) { // This is required for IE8 and below
    (style as unknown as IIe8Style).styleSheet.cssText = fontFace;
  } else {
    style.appendChild(document.createTextNode(fontFace));
  }
  
  return fontFamily;
}
