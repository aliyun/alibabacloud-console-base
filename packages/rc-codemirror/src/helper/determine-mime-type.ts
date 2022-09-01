/**
 * 在 codemirror/mode 下有对应的 MIME 类型，但很难记，这里对常用的后缀进行翻译
 */
export default function determineMimeType(type: string): string | undefined {
  switch (type) {
    case 'json':
      return 'application/json';
    case 'js':
      return 'application/javascript';
    case 'ts':
      return 'application/typescript';
    case 'html':
      return 'text/html';
    case 'css':
    case 'less':
      return 'text/x-less';
    case 'md':
    case 'markdown':
      return 'text/markdown';
    default:
      break;
  }
}