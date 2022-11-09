import type {
  ReactNode
} from 'react';

import {
  EVerifyType
} from '../../const';

export interface IModelProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  convertedVerifyType: EVerifyType;
  verifyDetail: string;
  urlSetting: string;
  coolingAfterSent: number;
  coolingAfterSentFail: number;
}

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
}