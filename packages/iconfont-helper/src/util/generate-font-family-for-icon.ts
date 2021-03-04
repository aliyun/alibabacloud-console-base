/**
 * iconfont 的生成规则
 */
export default function generateFontFamilyForIcon(projectId: string, hash: string): string {
  return `font_${projectId}_${hash}`;
}
