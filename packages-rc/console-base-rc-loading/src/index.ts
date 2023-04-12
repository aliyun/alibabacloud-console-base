export { default } from './rc/loading';
/**
 * @deprecated use @alicloud/console-base-rc-with-loading instead
 */
export { default as WithLoading } from './rc/with-loading';
/**
 * @deprecated use @alicloud/console-base-rc-with-loading instead
 */
export { default as WithPromise } from './rc/with-promise';

export type {
  IPropsLoading as LoadingProps,
  IPropsWithLoading as WithLoadingProps,
  IPropsWithPromise as WithPromiseProps
} from './types';

// TODO 以下将在下个版本删除

export {
  LoadingStatus,
  createDataWithLoading
} from '@alicloud/console-base-helper-loading';

export type {
  DataWithLoading
} from '@alicloud/console-base-helper-loading';
