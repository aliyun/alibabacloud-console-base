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
}

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
}