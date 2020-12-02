import 'whatwg-fetch'; // polyfill

import {
  IFetchOptions as FetchOptions
} from './types';
import {
  EFetchError
} from './const';

export {
  default
} from './util/fetch';

export {
  EFetchError
};

export type {
  FetchOptions
};
