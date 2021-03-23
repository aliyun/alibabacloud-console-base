import {
  IWindowWithBl,
  IBlConfigBeforeReady
} from '../types';

import isBlInitializing from './is-bl-initializing';
import isBlInitialized from './is-bl-initialized';

export default function getBlConfig(): IBlConfigBeforeReady | undefined {
  const {
    __bl
  } = window as IWindowWithBl;
  
  if (isBlInitialized(__bl)) {
    return __bl._conf;
  }
  
  if (isBlInitializing(__bl)) {
    return __bl.config;
  }
  
  return undefined;
}
