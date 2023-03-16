export default function isUrl(str: string): boolean {
  return /^(?:https?:)?\/\//.test(str) || /^data:image\//.test(str);
}
