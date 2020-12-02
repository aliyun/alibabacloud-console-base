import {
  TDefaultParams
} from '../types';

/**
 * 整合默认参数
 */
export default function mergeDefaultParams(factoryDefaultParams?: TDefaultParams, defaultParams?: TDefaultParams): TDefaultParams | undefined {
  if (!defaultParams || !factoryDefaultParams) {
    return factoryDefaultParams || defaultParams;
  }
  
  if (typeof factoryDefaultParams === 'function' || typeof defaultParams === 'function') {
    return () => {
      const paramsDefaultInFactory = typeof factoryDefaultParams === 'function' ? factoryDefaultParams() : factoryDefaultParams;
      const paramsDefault = typeof defaultParams === 'function' ? defaultParams() : defaultParams;
      
      return {
        ...paramsDefaultInFactory,
        ...paramsDefault
      };
    };
  }
  
  return {
    ...factoryDefaultParams,
    ...defaultParams
  };
}
