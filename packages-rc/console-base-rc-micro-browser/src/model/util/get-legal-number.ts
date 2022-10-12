export default function getLegalNumber(defaultNumber: number, ...args: (number | undefined)[]): number {
  return args.find(v => (typeof v === 'number' ? v > 0 : false)) || defaultNumber;
}