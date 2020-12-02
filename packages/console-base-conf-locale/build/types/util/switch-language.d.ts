import { ELanguage } from '../const';
/**
 * 切换语言
 *
 * 1. 之前还有一个 www.alibabacloud.com/api/changeLanguage，它只有在国际站登录的场景下有效（否则会 302 到错误页）
 * 2. 此接口没有日常环境，但日常环境下仍旧可以调用通 `.com`（实际上是切了线上的环境），所以日常直接设 cookie
 * 3. 如果接口出错，则强行设置 cookie
 */
export default function switchLanguage(lang: ELanguage): Promise<void>;
