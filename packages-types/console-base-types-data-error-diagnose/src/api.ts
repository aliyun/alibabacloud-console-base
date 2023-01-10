import {
  IParamsErrorDiagnose
} from './params';
import {
  IDataErrorDiagnose
} from './data';

export interface IApiDataErrorDiagnose {
  (params: IParamsErrorDiagnose): Promise<IDataErrorDiagnose>;
}