export interface IPayloadTutorRegister {
  id: string;
  title?: string;
  contents: string[];
}

export interface IPayloadTutorOpen {
  id: string;
  step?: number;
}

export interface IPayloadTutorStepChange {
  id: string;
  to: number;
  from: number;
}

export interface IPayloadTutorDismiss {
  id: string;
  done: boolean;
}

export interface IPayloadTutorClick {
  id: string;
  value: string;
}
