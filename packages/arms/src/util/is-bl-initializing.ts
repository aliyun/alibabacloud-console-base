import {
  IBl,
  IBlBeforeReady
} from '../types';

export default function isBlInitializing(bl?: IBl | IBlBeforeReady): bl is IBlBeforeReady {
  if (!bl) {
    return false;
  }
  
  return !!(bl as IBlBeforeReady).config;
}
