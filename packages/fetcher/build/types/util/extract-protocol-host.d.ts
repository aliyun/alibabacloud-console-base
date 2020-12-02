/**
 * 从 URL 提取 protocol 和 host，如果能够提取到则说明 url 是绝对地址
 */
export default function extractProtocolHost(url?: string): [string, string] | null;
