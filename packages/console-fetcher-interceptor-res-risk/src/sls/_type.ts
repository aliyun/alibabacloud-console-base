import {
  ESlsResultType
} from '../enum';

export interface ISlsCommonProps {
  errorCode?: string;
  errorMessage?: string;
  slsResultType: ESlsResultType;
}