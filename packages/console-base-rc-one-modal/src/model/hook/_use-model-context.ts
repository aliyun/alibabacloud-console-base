import {
  useContext
} from 'react';

import {
  IContext
} from '../types';
import {
  Context
} from '../provider';

export default function useModelContext(): IContext {
  return useContext<IContext>(Context);
}
