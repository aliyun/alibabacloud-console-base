import { FetcherUtils } from '@alicloud/fetcher';
import defaultGetCollina from './get-collina';
import defaultGetUmid from './get-umid';
import defaultGetSecToken from './get-sec-token';
/**
 * 对有 body 的请求，在 body 中添加阿里云安全必需的参数，这三个参数都可以可以在发送请求的时候覆盖的
 */

export default function createInterceptor() {
  return function (_ref) {
    var method = _ref.method,
        _ref$getCollina = _ref.getCollina,
        getCollina = _ref$getCollina === void 0 ? defaultGetCollina : _ref$getCollina,
        _ref$getUmid = _ref.getUmid,
        getUmid = _ref$getUmid === void 0 ? defaultGetUmid : _ref$getUmid,
        _ref$getSecToken = _ref.getSecToken,
        getSecToken = _ref$getSecToken === void 0 ? defaultGetSecToken : _ref$getSecToken;

    if (!FetcherUtils.canHaveBody(method)) {
      return;
    }

    var body = {
      collina: getCollina(),
      umid: getUmid(),
      sec_token: getSecToken()
    };
    return {
      body: body // body 会被 mix

    };
  };
}