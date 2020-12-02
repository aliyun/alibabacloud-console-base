/**
 * 支持 unicode 的 base64 编码，如果 uriSafe 为 true，则末尾的 `=` 会被抹掉，`+` 转成 `-`
 */
export default function encode(str: string, uriSafe?: boolean): string;
