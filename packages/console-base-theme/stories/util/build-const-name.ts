export default function buildConstName(...parts: string[]): string {
  return parts.filter(v => v).join('_').toUpperCase();
}
