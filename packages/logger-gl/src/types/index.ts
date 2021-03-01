import {
  EGlMode
} from '../const';

export type TMethod = 'GET' | 'POST';
export type TParams = Record<string, unknown>;
export type TFnParams = () => TParams;
export type TDefaultParams = TParams | TFnParams;

export interface IWin extends Window {
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
export interface IFactoryOptions {
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
