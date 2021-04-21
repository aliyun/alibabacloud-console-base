interface IIE8Style {
  styleSheet: {
    cssText: string;
  };
}

export default function injectFont(fontFamily: string, dataUrl?: string): string {
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
