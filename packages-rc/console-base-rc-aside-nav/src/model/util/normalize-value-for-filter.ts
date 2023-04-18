export default function normalizeValueForFilter(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '');
}
