import {
  useContext
} from 'react';

import {
  IModelContext
} from '../types';
import Context from '../context';

export default function useModelContext<T = void, D extends object = Record<string, unknown>>(): IModelContext<T, D> {
  return useContext(Context) as unknown as IModelContext<T, D>;
}
