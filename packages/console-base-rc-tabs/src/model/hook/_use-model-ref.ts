import {
  IContextRef
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelRef(): IContextRef {
  return useModelContext().REF;
}
