import {
  IInterceptorQueueItem
} from '../types';

/**
 * 对拦截器进行排序，默认的 priority 是 10，如果想靠前，指定 priority 小于 10，大于等于 10 将靠后
 */
export default function filterAndSortInterceptors<F = void, R = void>(unsorted: IInterceptorQueueItem<F, R>[]): IInterceptorQueueItem<F, R>[] {
  return unsorted.filter(v => v && (v.fulfilledFn || v.rejectedFn)).sort(({
    priority: pri1 = 10
  }, {
    priority: pri2 = 10
  }): number => pri1 - pri2);
}