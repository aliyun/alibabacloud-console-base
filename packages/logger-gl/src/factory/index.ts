import {
  IFactoryOptions
} from '../types';
import log from '../util/log';

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
}: IFactoryOptions): (params: P) => void {
  const logKey = `/${bizCode}.${scene}.${glKey}`;
  
  return (params: P) => {
    const finalDefaultParams = typeof defaultParams === 'function' ? defaultParams() : defaultParams;
    
    log(logKey, mode, {
      ...finalDefaultParams,
      ...params
    });
  };
}
