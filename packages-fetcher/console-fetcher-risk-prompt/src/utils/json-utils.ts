// 安全的 JSON.stringify
export function safeJsonStringify<T = Record<string, unknown>>(object?: T, defaultStringifyResult?: string): string {
  try {
    return JSON.stringify(object);
  } catch (error) {
    return defaultStringifyResult ?? '';
  }
}

// 是否是合法的 JSON 字符串
export function isValidJson(jsonString: unknown): boolean {
  if (typeof jsonString !== 'string') {
    return false;
  }

  try {
    JSON.parse(jsonString);

    return true;
  } catch (error) {
    return false;
  }
}