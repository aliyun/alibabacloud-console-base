export default function buildInterpolation(...parts: string[]): string {
  const [category, ...leftParts] = parts;
  const constName = `${category}.${leftParts.filter(v => v).join('_')}`.toUpperCase();
  
  return `\${${constName}}`;
}
