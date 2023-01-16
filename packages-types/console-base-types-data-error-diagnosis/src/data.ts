import {
  IErrorDiagnosisSolution,
  IErrorDiagnosisSample
} from './common';

export interface IDataErrorDiagnosis {
  title: string;
  product: string;
  solutions: IErrorDiagnosisSolution[];
  sample: IErrorDiagnosisSample;
}

export interface IDataErrorDiagnosisSolutionFeedback {
  me: -1 | 0 | 1; // 已踩（-1），已赞（1），未操作（0）
  time: Date | null;
  likes: number;
  dislikes: number;
  remarkDislike: string;
}