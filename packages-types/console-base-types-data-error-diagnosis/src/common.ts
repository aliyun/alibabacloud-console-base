export interface IErrorDiagnosisSolution {
  id: string;
  type: 'markdown' | 'text';
  content: string;
}

export interface IErrorDiagnosisSample {
  code: string;
  message: string;
  requestId: string;
  hostId: string;
}