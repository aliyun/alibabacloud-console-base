export default function getClassNames(className = ''): string[] {
  return className.split(/\s+/).filter(v => v);
}
