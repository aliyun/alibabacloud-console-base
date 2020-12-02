import extractProtocolHost from './extract-protocol-host';
/**
 * 测试最终的请求是否跨域
 */

export default function isCors(_ref) {
  var url = _ref.url,
      urlBase = _ref.urlBase;
  var _window = window,
      _window$location = _window.location,
      protocol = _window$location.protocol,
      host = _window$location.host;
  var protocolHost = extractProtocolHost(url);

  if (protocolHost) {
    // url 是绝对路径，则不会用到 urlBase
    return protocolHost[0] && protocolHost[0] !== protocol || protocolHost[1] !== host;
  }

  protocolHost = extractProtocolHost(urlBase);
  return protocolHost ? protocolHost[0] && protocolHost[0] !== protocol || protocolHost[1] !== host : false;
}