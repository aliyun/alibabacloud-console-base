import {
  ReactNode
} from 'react';

import {
  IModelProps
} from './props';

export interface IModelValue {
  props: IModelProps;
}

export interface IModelProviderProps extends IModelProps {
  children: ReactNode;
}
