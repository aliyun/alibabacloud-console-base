import {
  useContext
} from 'react';

import {
  IModelContext
} from '../types';
import {
  Context
} from '../provider';

export default function useModelContext(): IModelContext {
  return useContext(Context)!;
}
