import {
  IShittyStaticApi
} from '../types';

export default function fixApiResult(shitty: Record<string, IShittyStaticApi> = {}): Record<string, unknown> {
  return Object.keys(shitty || {}).reduce((result: Record<string, unknown>, v) => {
    const o = shitty[v];
    
    if (o && o.code === '200' && o.data !== undefined) {
      result[v] = o.data;
    }
    
    return result;
  }, {});
}
