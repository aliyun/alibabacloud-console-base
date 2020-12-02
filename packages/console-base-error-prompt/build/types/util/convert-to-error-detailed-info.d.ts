import { IErrorDetailedInfo, TErrorPromptArg } from '../types';
/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorDetailedInfo，这个方法会被暴露到外部
 */
export default function convertToErrorDetailedInfo(o: TErrorPromptArg): IErrorDetailedInfo;
