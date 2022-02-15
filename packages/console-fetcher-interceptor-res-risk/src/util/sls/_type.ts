import {
  ESlsResultType
} from '../../const';

export interface ISlsCommonProps {
  errorCode?: string;
  errorMessage?: string;
  slsResultType: ESlsResultType;
}