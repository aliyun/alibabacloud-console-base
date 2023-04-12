import {
  useContext
} from 'react';

import {
  IModelValue
} from '../types';
import Context from '../context';

export default function useModelContext(): IModelValue {
  return useContext(Context)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
}
