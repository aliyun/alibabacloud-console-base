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

export interface IDataErrorDiagnoseAnswerFeedback {
  me: -1 | 0 | 1; // 已踩（-1），已赞（1），未操作（0）
  likes: number;
  dislikes: number;
  remarkDislike: string;
}