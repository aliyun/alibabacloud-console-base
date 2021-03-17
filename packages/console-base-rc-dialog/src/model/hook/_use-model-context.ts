import {
  useContext
} from 'react';

import {
  TDialogData
} from '../../types';
import {
  IModelContext
} from '../types';
import {
  Context
} from '../provider';

export default function useModelContext<T = void, D = TDialogData>(): IModelContext<T, D> {
  return useContext(Context) as unknown as IModelContext<T, D>;
}
