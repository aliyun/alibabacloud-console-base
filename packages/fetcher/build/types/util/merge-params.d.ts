import { IParseOptions } from 'qs';
/**
 * 合并多个参数，如果传入的有字符串，会先 parse 成对象再合并
 */
export default function mergeParams(arr: any[], parseOptions?: IParseOptions): Record<string, unknown>;
