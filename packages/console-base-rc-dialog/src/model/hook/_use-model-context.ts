import {
  useContext
} from 'react';

import {
  TDialogData
} from '../../types';
import {
  IContext
} from '../types';
import {
  Context
} from '../provider';

export default function useModelContext<T = void, D = TDialogData>(): IContext<T, D> {
  return useContext(Context) as unknown as IContext<T, D>;
}
