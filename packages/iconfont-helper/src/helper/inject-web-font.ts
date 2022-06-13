import {
  generateFontFamilyForWebfont,
  injectFont
} from '../util';

/**
 * 使用 webfont 可以实现一些设计字体，又不失性能（因为只有没几个字）
 * 
 * https://www.iconfont.cn/webfont
 */
export default function injectWebFont(id: string): string {
  const fontFamily = generateFontFamilyForWebfont(id);
  
  return injectFont(fontFamily);
}
