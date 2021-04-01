import fetch from '@alicloud/fetcher-fetch';

import {
  ILogInfo
} from '../types';

import buildPostBody from './build-post-body';

/**
 * POST 发送日志参考文档 https://help.aliyun.com/document_detail/120218.html
 * 
 * 不再推荐使用的 GET 方式上传日志，一次只能一条，性能差 https://help.aliyun.com/document_detail/31752.html
 */
export default function sendLogs(trackUrl: string, apiVersion: string, infoList: ILogInfo[]): void {
  if (!infoList.length) {
    return;
  }
  
  try {
    const body = JSON.stringify(buildPostBody(infoList));
    
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
    }).catch(() => {
      // ignore
    });
  } catch (ex) {
    // ignore
  }
}
