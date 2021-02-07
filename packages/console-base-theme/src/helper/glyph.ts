import {
  injectIconFont
} from './inject-font';

interface IGlobalFontFace {
  projectId: string;
  hash: string;
  dataUrl?: string; // 如果传入，它将被用于 woff2，否则 woff2 还会是一个 url
}

/**
 * 在 header 上注入 font face 全局样式，并返回 font-family 名字
 * IOS4 not supported
 * 
 * @deprecated
 */
export function injectGlobalFontFace({
  projectId,
  hash,
  dataUrl
}: IGlobalFontFace): string {
  return injectIconFont(projectId, hash, dataUrl);
}
