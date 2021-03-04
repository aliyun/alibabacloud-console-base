import generateFontFamilyForIcon from '../util/generate-font-family-for-icon';
import injectFont from '../util/inject-font';

/**
 * 在 header 上注入 font face 全局样式，并返回 font-family 名字
 * IOS4 not supported
 */
export default function injectIconFont(projectId: string, hash: string, dataUrl?: string): string {
  const fontFamily = generateFontFamilyForIcon(projectId, hash);
  
  return injectFont(fontFamily, dataUrl);
}
