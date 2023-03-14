import {
  ESlsResultType
} from '../enum';

export interface ISlsCommonPayload {
  errorCode?: string;
  errorMessage?: string;
  slsResultType: ESlsResultType;
}