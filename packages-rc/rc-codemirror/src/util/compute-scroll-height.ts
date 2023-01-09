import {
  FONT_LINE_HEIGHT
} from '../const';

/**
 * 根据行数计算 .CodeMirror-scroll 的高度
 */
export default function computeScrollHeight(lines: number): number {
  return Math.round(FONT_LINE_HEIGHT * lines + 8); // 单行 17px，最外层有上下 4px 的 padding
}
