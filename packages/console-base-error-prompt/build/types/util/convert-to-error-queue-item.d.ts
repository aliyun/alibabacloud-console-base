import { TErrorPromptArg, IErrorPromptArgExtra, IErrorQueueItem } from '../types';
/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorQueueItem
 */
export default function convertToErrorQueueItem(o?: TErrorPromptArg, extra?: IErrorPromptArgExtra): IErrorQueueItem | null;
