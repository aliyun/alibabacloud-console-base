/**
 * 数值展示组件，对数值进行格式化展示 1234 -> 1,234
 */
export default function formatNumberFallback(n: number, precision = 0): string {
  let [wholePart, fractionPart = ''] = `${n}`.split('.') as [string, string | undefined];
  
  wholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 整数部分加逗号
  
  if (precision >= 0) {
    if (fractionPart.length >= precision) {
      fractionPart = fractionPart.substring(0, precision); // 有精度损耗 不纠结
    } else {
      for (let i = fractionPart.length; i < precision; i++) {
        fractionPart += '0';
      }
    }
  }
  
  return fractionPart ? `${wholePart}.${fractionPart}` : wholePart;
}