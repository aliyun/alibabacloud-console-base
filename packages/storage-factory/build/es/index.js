import createStorageFn from './util/create-storage-fn';
export default function (wholeDataKey, session) {
  return createStorageFn(wholeDataKey, session ? window.sessionStorage : window.localStorage);
}