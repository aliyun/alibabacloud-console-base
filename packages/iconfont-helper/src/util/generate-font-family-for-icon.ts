/**
 * iconfont 的生成规则
 */
export default function generateFontFamilyForIcon(projectId: string, hash: string): string {
  return `iconfont_${projectId}_${hash}`;
}
