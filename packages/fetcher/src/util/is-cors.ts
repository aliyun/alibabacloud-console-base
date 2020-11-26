import {
  IFetcherConfig
} from '../types';

import extractProtocolHost from './extract-protocol-host';

/**
 * 测试最终的请求是否跨域
 */
export default function isCors({
  url,
  urlBase
}: IFetcherConfig): boolean {
  const {
    location: {
      protocol,
      host
    }
  } = window;
  let protocolHost = extractProtocolHost(url);
  
  if (protocolHost) { // url 是绝对路径，则不会用到 urlBase
    return (protocolHost[0] && protocolHost[0] !== protocol) || protocolHost[1] !== host;
  }
  
  protocolHost = extractProtocolHost(urlBase);
  
  return protocolHost ? (protocolHost[0] && protocolHost[0] !== protocol) || protocolHost[1] !== host : false;
}
