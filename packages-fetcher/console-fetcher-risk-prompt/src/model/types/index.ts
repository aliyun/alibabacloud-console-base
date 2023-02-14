import type {
  ReactNode
} from 'react';

import {
  ICommonRiskInfo
} from '../../types';

export interface IModelProps {
  codeType: string;
  accountId: string;
  urlSetting: string;
  coolingAfterSent: number;
  coolingAfterSentFail: number;
  oldMainOrMpkVerifyInfo?: Omit<ICommonRiskInfo, 'codeType'>;
}

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
}