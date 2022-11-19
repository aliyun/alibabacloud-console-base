import {
  IShittyOpenStatus,
  IOpenStatus
} from '../types';

/**
 * 修复布尔值、数值，其他仍旧为字符串
 */
function fixOneOpenStatus(shity: IShittyOpenStatus): IOpenStatus {
  const o: Record<string, unknown> = {};
  
  Object.keys(shity).forEach(v => {
    const value: string = shity[v as keyof IShittyOpenStatus];
    
    if (value === 'true') {
      o[v] = true;
    } else if (value === 'false') {
      o[v] = false;
    } else if (/^\d+$/.test(value)) {
      o[v] = Number(value);
    } else {
      o[v] = value;
    }
  });
  
  return o as unknown as IOpenStatus;
}

export default function fixOpenStatus(o: Record<string, IShittyOpenStatus> = {}): Record<string, IOpenStatus> {
  return Object.keys(o || {}).reduce((result: Record<string, IOpenStatus>, v: string) => {
    result[v] = fixOneOpenStatus(o[v]!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
    
    return result;
  }, {});
}
