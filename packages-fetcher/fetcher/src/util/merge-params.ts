import qs, {
  IParseOptions
} from 'qs';

/**
 * 合并多个参数，如果传入的有字符串，会先 parse 成对象再合并
 */
export default function mergeParams(arr: any[], parseOptions?: IParseOptions): Record<string, unknown> { // eslint-disable-line @typescript-eslint/no-explicit-any
  return arr.filter(v => v).reduce((result: Record<string, unknown>, v: Record<string, unknown> | string) => {
    const mix: Record<string, unknown> = typeof v === 'string' ? qs.parse(v, parseOptions) : v;
    
    return {
      ...result,
      ...mix
    };
  }, {});
}
