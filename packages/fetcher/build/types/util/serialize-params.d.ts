import { IStringifyOptions } from 'qs';
/**
 * 对参数进行序列化
 */
export default function serializeParams(params: string | Record<string, unknown>, options?: IStringifyOptions): string;
