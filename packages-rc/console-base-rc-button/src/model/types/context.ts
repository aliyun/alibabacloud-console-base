import {
  ReactNode
} from 'react';

import {
  IModelProps
} from './props';

export interface IModelValue {
  props: IModelProps;
}

export interface IModelProviderProps {
  props: IModelProps; // 不能通过继承... 因为它里边也有 children ..
  children: ReactNode;
}
