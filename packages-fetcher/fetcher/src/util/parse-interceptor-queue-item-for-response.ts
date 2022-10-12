import {
  IFetcherConfig,
  IFnInterceptResponseFulfilled,
  IFnInterceptResponseRejected,
  IInterceptorQueueItem,
  TArgsForInterceptResponse
} from '../types';

export default function parseInterceptorQueueItemForResponse<C extends IFetcherConfig>(args: TArgsForInterceptResponse<C>): IInterceptorQueueItem<IFnInterceptResponseFulfilled<C>, IFnInterceptResponseRejected<C>> {
  let item: IInterceptorQueueItem<IFnInterceptResponseFulfilled<C>, IFnInterceptResponseRejected<C>>;
  
  if (typeof args[0] === 'number') {
    item = {
      priority: args[0],
      fulfilledFn: args[1],
      rejectedFn: args[2]
    };
  } else {
    item = {
      fulfilledFn: args[0],
      rejectedFn: args[1] as IFnInterceptResponseRejected<C>
    };
  }
  
  return item;
}