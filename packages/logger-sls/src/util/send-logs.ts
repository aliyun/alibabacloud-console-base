import _noop from 'lodash/noop';
import _isNil from 'lodash/isNil';
import _forEach from 'lodash/forEach';

import fetch from '@alicloud/fetcher-fetch';

import {
  ILogPostBody,
  ILogInfo
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
function convertLogInfo(info: Record<string, unknown>): Record<string, string> {
  const o: Record<string, string> = {};
  
  _forEach(info, (v, k) => {
    if (v === '' || _isNil(v)) {
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
function buildPostBody(infoList: ILogInfo[]): ILogPostBody {
  let __topic__ = TOPIC_MERGED;
  
  if (infoList.length === 1) {
    __topic__ = infoList[0].__topic__;
    
    delete infoList[0].__topic__; // 可以少一个没有必要的 __topic__0
  }
  
  return {
    __topic__,
    __logs__: infoList.map(convertLogInfo)
  };
}

// POST 的 body in string，虽然这里用了 JSON.stringify 但肯定不会抛错，因为上层代码保证
function buildPostBodyString(infoList: ILogInfo[]): string {
  return JSON.stringify(buildPostBody(infoList));
}

/**
 * POST 发送日志参考文档 https://help.aliyun.com/document_detail/120218.html
 */
export default function sendLogs(trackUrl: string, apiVersion: string, infoList: ILogInfo[]): void {
  if (!infoList.length) {
    return;
  }
  
  const body = buildPostBodyString(infoList);
  
  fetch(trackUrl, {
    method: 'POST',
    timeout: 20000,
    // SLS 如果要启用 web log，必须 CORS，但不允许带 cookie，所以不可用 `include`，否则会报错：
    // 「Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’」
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      // 'x-log-compresstype': 'lz4'
      'x-log-apiversion': apiVersion,
      'x-log-bodyrawsize': body.length
    },
    body
  }).catch(_noop);
}

// 不再推荐使用的 GET 方式上传日志，一次只能一条，性能差
// https://help.aliyun.com/document_detail/31752.html
// function doLog(trackUrl: string, apiVersion: string, info: ILogInfo): void {
//   fetch(`${trackUrl}?${qs.stringify({
//     APIVersion: apiVersion,
//     ...info
//   })}`, {
//     timeout: 20000,
//     credentials: 'omit'
//   }).catch(_noop);
// }
