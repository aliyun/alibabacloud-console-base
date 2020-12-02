/**
 * 创建 FetcherError 它一定得有 config 属性
 */
export default function createError(config, name, message, code) {
  var error = new Error(message);
  error.config = config;
  error.name = name;
  error.code = code;
  return error;
}