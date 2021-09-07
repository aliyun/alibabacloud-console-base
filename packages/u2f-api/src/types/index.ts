import {
  EErrorCode
} from '../const';

export interface IErrorU2f extends Error {
  metaData: {
    type: string;
    code: EErrorCode;
  };
}

export interface RegisterRequest {
  version: string;
  appId: string;
  challenge: string;
}

export interface SignRequest extends RegisterRequest {
  keyHandle: string;
}

export interface RegisterResponse {
  clientData: string;
  registrationData: string;
  version: string;
}

export interface SignResponse {
  clientData: string;
  keyHandle: string;
  signatureData: string;
}

export interface BackendError {
  errorCode?: EErrorCode;
}

export type OrError<T> = T & BackendError;

export type Transport = 'bt' | 'ble' | 'nfc' | 'usb';
export type Transports = Transport[];

export interface RegisteredKey {
  version: string;
  keyHandle: string;
  transports: Transports;
  appId: string;
}
