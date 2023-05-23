import {
  ReactNode
} from 'react';

import {
  TRequestMethod,
  ICommonRiskInfo,
  TSetRiskCanceledErrorProps,
  TReRequestWithVerifyResult
} from '../../types';

export interface IModelProps {
  codeType: string;
  accountId: string;
  oldMainAccountUrlSetting: string;
  oldMainSendCodeUrl: string;
  oldMainSendCodeMethod: TRequestMethod;
  oldMainOrMpkVerifyInfo?: Omit<ICommonRiskInfo, 'codeType'>;
  setRiskCanceledErrorProps: TSetRiskCanceledErrorProps;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
}