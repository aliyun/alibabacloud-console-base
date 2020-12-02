/**
 * 获取 umid 参数，控制台下通用
 */
export default function getUmid() {
  try {
    var _window;

    return (_window = window) === null || _window === void 0 ? void 0 : _window.um.getToken();
  } catch (ex) {
    return undefined;
  }
}