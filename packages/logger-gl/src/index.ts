import qs from 'qs';

/**
 * 令箭触发方式
 */
export enum EGlMode {
  CLICK = 'CLK', // 点击
  EXPOSE = 'EXP', // 曝光
  SLIDE = 'SLD', // 滑动
  OTHER = 'OTHER' // 其他
}

type TMethod = 'GET' | 'POST';
type TParams = Record<string, any>;
type TFnParams = () => TParams;
type TDefaultParams = TParams | TFnParams;

interface IWin {
  // `window.goldlog` 对象，我们只关心 record 方法
  goldlog?: {
    /**
     * 这里的 logKey 由 bizCode + scene + glKey 组成，且必须以 `/`打头
     */
    record(logKey: string, mode: EGlMode, params?: string, method?: TMethod): void;
  };
}

/**
 * 创建 logger 方法的 options
 */
export interface IOptions {
  /**
   * 业务码
   */
  bizCode: string;
  /**
   * 场景码
   */
  scene: string;
  /**
   * 令箭码
   */
  glKey: string;
  /**
   * 触发方式
   */
  mode?: EGlMode;
  /**
   * HTTP 请求方式
   */
  method?: TMethod;
  /**
   * 默认参数，避免每次都要传，可以是静态数据或产生动态数据的方法
   */
  defaultParams?: TDefaultParams;
}

/**
 * 承接 `window.goldlog.record(logKey, mode, params, method)`，不要直接依赖全局对象。
 * 
 * `goldlog` 对象是由 `http://g.alicdn.com/alilog/mlog/aplus_{xx}.js` 脚本创建的，看了一下源码，这里的 xx 有以下可能的值：
 * 
 * - `v2` 一般看到的是它
 * - `int` 国际站
 * - `wap` 手机 H5
 * - `std` 废的
 * - `o` ？
 * - `u` ？
 * 
 * 这些脚本的代码，有着 99% 的相似度。
 * 
 * 一个黄金令箭埋点其实就是发起一个 HTTP GET / POST 请求（我们只用 GET），对应的 URL 分解后大概长这样：
 * 
 * * host: 域名 e.g. `gm.mmstat.com` `gj.mmstat.com`（可能还有其他，`gj` 好像是国际站用的），黄金令箭脚本自动判断
 * * pathname: `/${bizCode}.${scene}.${glKey}`，即这里进行拼装的 `logKey`（黄金令箭编码），注意一定要以 `/` 打头
 * * search:
 *    - gmkey: `mode` 的值
 *    - gokey: 传入的参数 + 黄金令箭自带的参数 `encodeURIComponent(`k1=v1&k2=v2...`)`，再次分解后如下：
 *        + ...传入的自定义参数（以下是自动生成的）...
 *        + jsver: <CUSTOM> e.g. aplus_std | aplus_int - 好像是标准和国际的意思，分别对应 gm 和 gj 域名（看了代码应该还有别的）
 *        + lver: <CUSTOM> e.g. 8.12.10 在 aplus 脚本中有定义 splus 脚本实际的版本号 `stable_version.value`、`grey_version.value`、`dev_version.value`
 *        + pver: <CUSTOM> e.g. 0.7.9 `goldlog.aplus_cplugin_ver` 的值
 *        + cache: <CUSTOM> e.g. 170d8ef 每次都不一样
 *        + _slog: <CUSTOM> e.g. 0 ？ 貌似一直是 0
 *    - cna: <CUSTOM> e.g. IxyiFBZfMxECASp4S4TPXJeH 在当前二级域名下的 cookie cna 值（貌似阿里内统一？）
 *    - spm-cnt: <CUSTOM> e.g. 5176.12818093.0.0.488716d0Mw20bv
 *    - logtype: <CUSTOM> e.g. 2 ？
 */
export function log(logKey: string, mode?: EGlMode, params?: TParams, method: TMethod = 'GET'): void {
  const gl = (window as IWin).goldlog;
  
  if (!gl || !gl.record) {
    return;
  }
  
  gl.record(logKey, mode || EGlMode.OTHER, params ? qs.stringify(params) : '', method);
}

/**
 * 你可以通过 `log` 直接发送黄金令箭，也可以创建一个只需要关心参数的 log 方法（通过泛型 P 约束参数长相）。
 * 推荐使用它，而不是直接用 log 方法。
 */
export default function createLogger<P = void>({
  bizCode,
  scene,
  glKey,
  mode,
  defaultParams
}: IOptions): (params: P) => void {
  const logKey = `/${bizCode}.${scene}.${glKey}`;
  
  return (params: P) => {
    const finalDefaultParams = typeof defaultParams === 'function' ? defaultParams() : defaultParams;
    
    log(logKey, mode, {
      ...finalDefaultParams,
      ...params
    });
  };
}
