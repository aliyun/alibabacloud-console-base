import {
  useContext
} from 'react';

import {
  IModelValue
} from '../types';
import Context from '../context';

export default function useModelContext(): IModelValue {
  return useContext(Context)!;
}
