import qs, {
  IStringifyOptions
} from 'qs';

/**
 * 对参数进行序列化
 */
export default function serializeParams(params: string | Record<string, unknown>, options?: IStringifyOptions): string {
  if (!params) {
    return '';
  }
  
  if (typeof params === 'string') {
    return params;
  }
  
  return qs.stringify(params, options);
}
