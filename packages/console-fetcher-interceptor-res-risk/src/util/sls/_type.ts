import {
  ESlsResultType
} from '../../const';

export interface ISlsCommon {
  errorCode?: string;
  errorMessage?: string;
  slsResultType: ESlsResultType;
}