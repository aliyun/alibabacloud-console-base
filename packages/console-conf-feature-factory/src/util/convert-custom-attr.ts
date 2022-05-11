export default function convertCustomAttr(attr: string): string[] | null {
  if (attr) {
    return attr.trim().split(/\s*[\n,]\s*/);
  }
  
  return null;
}