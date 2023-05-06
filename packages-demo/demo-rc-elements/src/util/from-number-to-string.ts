export default function fromNumberToString(n?: number | string): string | undefined {
  if (typeof n === 'undefined') {
    return undefined;
  }
  
  return typeof n === 'number' ? n.toString() : '';
}
