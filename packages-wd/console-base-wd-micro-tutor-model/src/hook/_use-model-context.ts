import {
  useContext
} from 'react';

import {
  IModelContext
} from '../types';
import Context from '../context';

export default function useModelContext(): IModelContext {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useContext(Context)!;
}
