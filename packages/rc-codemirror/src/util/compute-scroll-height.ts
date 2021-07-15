/**
 * 根据行数计算 .CodeMirror-scroll 的高度
 */
export default function computeScrollHeight(lines: number): number {
  return Math.round(17 * lines + 8); // 单行 17px，最外层有上下 4px 的 padding
}
