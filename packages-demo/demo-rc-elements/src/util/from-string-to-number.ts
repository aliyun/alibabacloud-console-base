export default function fromStringToNumber(s?: string): number {
  const n = Number(s);
  
  return isNaN(n) ? 0 : n;
}
