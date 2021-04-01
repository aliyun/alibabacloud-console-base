import {
  ILogInfo,
  ILogPostBody
} from '../types';
import {
  TOPIC_MERGED
} from '../const';

/**
 * 发送的 JSON 里边不可以有除了字符串以外的值，否则报错
 * 
 * - code = PostBodyInvalid
 * - message = Value in log is not string data type
 */
function convertLogInfo(info: ILogInfo): Record<string, string> {
  const o: Record<string, string> = {};
  
  Object.keys(info).forEach(k => {
    const v = info[k];
    
    if (v === '' || v === null || v === undefined) {
      return;
    }
    
    if (typeof v === 'string') {
      o[k] = v;
    } else if (typeof v === 'number' || typeof v === 'boolean') {
      o[k] = v.toString();
    } else {
      try { // 避免 cyclic error
        o[k] = JSON.stringify(v);
      } catch (ex) {
        o[k] = 'TypeError: cyclic object value';
      }
    }
  });
  
  return o;
}

/**
 * 利用 PutWebtracking https://help.aliyun.com/document_detail/120218.html 发送日志，
 * 如果 __logs__ 里含有 __topic__ 则，外部的这个 __topic__ 将被改为 __topic__0，
 * 为了干净，在仅发送一条日志的时候，将 __logs__ 里的 __topic__ 往上提。
 * 
 * 但是，POST 的时候 __source__ 不会被默认填充成 IP，IP 在 __tag__:__client_ip__（GET 方式也有）
 */
export default function buildPostBody(infoList: ILogInfo[]): ILogPostBody {
  let __topic__ = TOPIC_MERGED;
  
  if (infoList.length === 1) {
    __topic__ = infoList[0].__topic__;
  }
  
  return {
    __topic__,
    __logs__: infoList.map(convertLogInfo)
  };
}
