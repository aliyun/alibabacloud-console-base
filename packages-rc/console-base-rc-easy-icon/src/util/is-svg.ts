export default function isSvg(str: string): boolean {
  return /^\s*<svg/.test(str) && /<\/svg>\s*$/.test(str);
}
