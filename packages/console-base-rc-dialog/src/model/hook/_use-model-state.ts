import {
  TDialogData
} from '../../types';
import {
  IModelState
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelState<T = void, D = TDialogData>(): IModelState<T, D> {
  return useModelContext<T, D>().state;
}
