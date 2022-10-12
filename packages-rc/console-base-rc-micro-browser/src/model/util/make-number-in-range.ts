export default function makeNumberInRange(n: number, [min, max]: [number, number]): number {
  if (n < min) {
    return min;
  }
  
  if (n > max) {
    return max;
  }
  
  return n;
}