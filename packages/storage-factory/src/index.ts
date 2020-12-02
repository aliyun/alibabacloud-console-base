import {
  TFnStorage
} from './types';
import createStorageFn from './util/create-storage-fn';

export default function(wholeDataKey: string, session?: boolean): TFnStorage {
  return createStorageFn(wholeDataKey, session ? window.sessionStorage : window.localStorage);
}
