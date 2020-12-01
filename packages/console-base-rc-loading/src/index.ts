import {
  IPropsLoading as LoadingProps,
  IPropsWithLoading as WithLoadingProps,
  IPropsWithPromise as WithPromiseProps
} from './types';
import WithLoading from './rc/with-loading';
import WithPromise from './rc/with-promise';

export {
  default
} from './rc/loading';

export {
  WithLoading,
  WithPromise
};

export type {
  LoadingProps,
  WithLoadingProps,
  WithPromiseProps
};

