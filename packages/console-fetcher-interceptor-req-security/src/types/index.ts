import {
  FetcherConfig
} from '@alicloud/fetcher';

/**
 * 依赖 g.alicdn.com/security/umscript/___/um.js 注入（也有可能是 s.tbcdn.cn/g/security/umscript/___/um.js），
 * 脚本由控制台自己加，版本号可能是 2.1.4（截止到 2020/05/16 折行代码写下之时）
 */
export interface IWindow {
  /**
   * OneConsole 的配置，这里只关心 SEC_TOKEN
   */
  ALIYUN_CONSOLE_CONFIG?: {
    SEC_TOKEN: string;
  };
  /**
   * 用于获取 collina
   * 
   * 依赖 https://acjs.aliyun.com/js/uab.js，由 t-engine 注入到 HTML，
   * 它下边会有一大堆的东西，然而我们仅仅感兴趣的只有这里列出的这些。
   * 然而通过浏览器访问它的时候，它已经被变成一个 script 标签的引用了，好在这些属性还在。
   * 
   * 假设存在，用的时候 try-catch
   */
  UA_Opt: {
    LogVal: string;
    // Token: string;
    // reload(): void;
  };
  /**
   * 用于获取 umid
   * 
   * 依赖 g.alicdn.com/security/umscript/___/um.js 注入（也有可能是 s.tbcdn.cn/g/security/umscript/___/um.js），
   * 脚本由控制台自己加，版本号可能是 2.1.4（截止到 2020/05/16 折行代码写下之时）
   * 
   * 假设存在，用的时候 try-catch
   */
  um: {
    getToken(): string;
  };
}

export interface IFetcherConfigExtra {
  /**
   * 人机识别码
   * 通过 `window[window.UA_Opt.LogVal]` 获取，`window.UA_Opt` 来自 `uab.js`，`uab.js` 是 t-engine 自动注入的
   */
  getCollina?(): string;
  /**
   * 不知道干啥的
   * 通过 `window.um.getToken()` 获取，`window.um` 来自 `um.js`，`um.js` 由应用主动写到页面
   */
  getUmid?(): string;
  /**
   * 判断登录有效性
   * 应用写到 HTML 的一个常量，OneConsole 有固定的方案，非 OneConsole 需要写一个自己指定
   */
  getSecToken?(): string;
}

export interface IFetcherConfigExtended extends FetcherConfig, IFetcherConfigExtra {}
