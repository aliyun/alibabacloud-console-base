import {
  useContext
} from 'react';

import {
  IModelContext
} from '../types';
import Context from '../context';

export default function useModelContext(): IModelContext {
  return useContext(Context)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
}
