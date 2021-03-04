import {
  createContext
} from 'react';

import {
  IModelContext
} from '../types';

export default createContext<IModelContext | null>(null);
