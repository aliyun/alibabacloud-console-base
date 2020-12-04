import {
  IContextState
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelState(): IContextState {
  return useModelContext().STATE;
}
