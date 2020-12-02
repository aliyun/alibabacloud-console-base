var REG_ONE_API = /^\/data\/(multi)?(inner)?(api|call)\.json/i;
/**
 * 判断是否为 OneConsole 封装的 API 请求（请求的是当前域名下的相对地址）
 */

export default function isRelativeOneApi(_ref) {
  var url = _ref.url,
      urlBase = _ref.urlBase;
  return !urlBase && REG_ONE_API.test(url);
}