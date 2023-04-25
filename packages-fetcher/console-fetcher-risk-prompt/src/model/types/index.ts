import type {
  ReactNode
} from 'react';

import {
  ICommonRiskInfo,
  TReRequestWithVerifyResult
} from '../../types';

export interface IModelProps {
  codeType: string;
  accountId: string;
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