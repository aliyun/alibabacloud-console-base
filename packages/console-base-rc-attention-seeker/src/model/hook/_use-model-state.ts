import {
  IModelState
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelState(): IModelState {
  return useModelContext().state;
}
