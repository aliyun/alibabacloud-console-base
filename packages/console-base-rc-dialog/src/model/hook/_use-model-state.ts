import {
  TDialogData
} from '../../types';
import {
  IContextState
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelState<T = void, D = TDialogData>(): IContextState<T, D> {
  return useModelContext<T, D>().STATE;
}
