export default function buildInterpolation(...parts: string[]): string {
  return `\${${parts.filter(v => v).join('.').toUpperCase()}}`;
}
