export {
  DATA_CLICK_HIJACK_IGNORE
} from './const';

export { default } from './hijack-click/global';
export { default as hijackClickInDom } from './hijack-click/in-dom';

export type {
  IHijacker as Interceptor
} from './types';
