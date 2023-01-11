import {
  IErrorDiagnoseAnswer,
  IErrorDiagnoseSample
} from './common';

export interface IDataErrorDiagnose {
  title: string;
  product: string;
  answers: IErrorDiagnoseAnswer[];
  sample: IErrorDiagnoseSample;
}