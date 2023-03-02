import type {
  ReactNode
} from 'react';

import {
  ICommonRiskInfo
} from '../../types';

export interface IModelProps {
  codeType: string;
  accountId: string;
  oldMainOrMpkVerifyInfo?: Omit<ICommonRiskInfo, 'codeType'>;
}

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
}