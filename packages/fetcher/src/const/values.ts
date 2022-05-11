// 错误定义，用于 error.name，枚举不好扩展，故此用常量
export const ERROR_TIMEOUT = 'FetcherErrorTimeout'; // 超时（不是真正的超时，前端模拟）
export const ERROR_NETWORK = 'FetcherErrorNetwork'; // 网络错误（未到业务层）
export const ERROR_RESPONSE_STATUS = 'FetcherErrorResponseStatus'; // 响应状态错误 response.ok 为 false，即 response.status 在 200-299 之外时的错误
export const ERROR_RESPONSE_PARSE = 'FetcherErrorResponseParse'; // 响应解析错误，一般出现在非 JSON 的场景
