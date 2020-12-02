import { ETypeLine, REG_OL, REG_UL, REG_HR } from '../const';
/**
 * 判断一行文本的类型
 */

export default function determineLineType(str) {
  if (REG_OL.test(str)) {
    return ETypeLine.OL;
  }

  if (REG_UL.test(str)) {
    return ETypeLine.UL;
  }

  if (REG_HR.test(str)) {
    return ETypeLine.HR;
  }

  return ETypeLine.P;
}