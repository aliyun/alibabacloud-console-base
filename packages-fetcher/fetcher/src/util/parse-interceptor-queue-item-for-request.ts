import {
  IFetcherConfig,
  IFnInterceptRequest,
  IInterceptorQueueItem,
  TArgsForInterceptRequest
} from '../types';

export default function parseInterceptorQueueItemForRequest<C extends IFetcherConfig>(args: TArgsForInterceptRequest<C>): IInterceptorQueueItem<IFnInterceptRequest<C>> {
  let item: IInterceptorQueueItem<IFnInterceptRequest<C>>;
  
  if (typeof args[0] === 'number') {
    item = {
      priority: args[0],
      fulfilledFn: args[1]
    };
  } else {
    item = {
      fulfilledFn: args[0]
    };
  }
  
  return item;
}