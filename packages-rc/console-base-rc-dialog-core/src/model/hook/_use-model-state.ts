import {
  IModelState
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelState<T = void, D extends object = Record<string, unknown>>(): IModelState<T, D> {
  return useModelContext<T, D>().state;
}
