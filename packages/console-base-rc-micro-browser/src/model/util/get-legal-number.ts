export default function getLegalNumber(defaultNumber: number, ...args: number[]): number {
  return args.find(v => v > 0) || defaultNumber;
}