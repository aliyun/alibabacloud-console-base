export default function buildCssVarName(...parts: string[]): string {
  return `--cb-${parts.filter(v => v).join('-')}`.replace(/_/g, '-').toLowerCase();
}
