/**
 * 保证 min max 一定是 min max
 */
export default function numberRange(min: number, max: number): [number, number] {
  return min > max ? [max, min] : [min, max];
}