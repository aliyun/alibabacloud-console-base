import type {
  ReactNode
} from 'react';

import {
  TRequestMethod,
  ICommonRiskInfo,
  TReRequestWithVerifyResult
} from '../../types';

export interface IModelProps {
  codeType: string;
  accountId: string;
  oldMainAccountUrlSetting: string;
  oldMainSendCodeUrl: string;
  oldMainSendCodeMethod: TRequestMethod;
  oldMainOrMpkVerifyInfo?: Omit<ICommonRiskInfo, 'codeType'>;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
}