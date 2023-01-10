export interface IErrorDiagnoseAnswer {
  id: string;
  type: 'markdown' | 'text';
  content: string;
}

export interface IErrorDiagnoseSample {
  code: string;
  message: string;
  requestId: string;
  hostId: string;
}