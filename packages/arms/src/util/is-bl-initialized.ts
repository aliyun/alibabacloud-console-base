import {
  IBl,
  IBlBeforeReady
} from '../types';

export default function isBlInitialized(bl?: IBl | IBlBeforeReady): bl is IBl {
  if (!bl) {
    return false;
  }
  
  return !!(bl as IBl)._conf;
}
