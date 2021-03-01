import _noop from 'lodash/noop';

import fetcherJsonp from '@alicloud/fetcher-jsonp';

import {
  ELanguage
} from '../const';

import getLanguageInCookie from './get-language-in-cookie';
import setLanguageInCookie from './set-language-in-cookie';

/**
 * 切换语言
 * 
 * 1. 必须要同时搞 www.alibabacloud.com/api/changeLanguage，它只有在国际站登录的场景下有效（否则会 302 到错误页），但有这样的场景：
 *    1.1 在控制台上切语言
 *    1.2 然后到 alibabacloud 的域名下（如 commonbuy 只有 alibabacloud...）
 *    1.3 此时目的地址的语言将不对... tm 终于知道为什么了..
 * 2. 接口没有日常环境，但日常环境下仍旧可以调用通 `.com`（实际上是切了线上的环境），所以日常直接设 cookie
 * 3. 如果接口出错，则强行设置 cookie
 * 4. 此封装不会报错
 */
export default function switchLanguage(lang: ELanguage): Promise<void> {
  if (/.test$/.test(location.hostname)) { // 不要依赖 console-base-conf-env
    setLanguageInCookie(lang);
    
    return Promise.resolve();
  }
  
  return Promise.all([
    // response 为 JSONP 的 `{ code: 200, message: 'success' }`
    // response header 带 cookie 如下：
    // set-cookie: aliyun_lang=_传入的值_; path=/; max-age=2592000; expires=...; domain=.aliyun.com; samesite=none; secure
    fetcherJsonp<void>(`//intl.aliyun.com/api/changeLanguage?lang=${encodeURIComponent(lang)}`, {
      timeout: 2000
    }).then(response => response.json()).then(() => getLanguageInCookie() !== lang, () => true).then(needFix => {
      if (needFix) {
        setLanguageInCookie(lang);
      }
    }), fetcherJsonp<void>(`//www.alibabacloud.com/api/changeLanguage?lang=${encodeURIComponent(lang)}`)]).then(_noop, _noop);
}
