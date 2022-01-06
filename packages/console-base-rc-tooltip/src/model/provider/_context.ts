import {
  createContext
} from 'react';

import {
  IModelValue
} from '../types';

export default createContext<IModelValue | null>(null);
