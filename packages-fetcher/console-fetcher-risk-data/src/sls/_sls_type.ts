import {
  ESlsResultType
} from '../const';

export interface ISlsCommonProps {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  slsResultType: ESlsResultType; // API 执行结果 - 成功/失败（报错）
}