/**
 * 安全相关的参数不记录，尤其是 collina，它很大
 */
export default function removeSecParamsFromBody(b?: Record<string, unknown> | string): Record<string, unknown> | string | undefined;
