import {
  TFnVoid
} from '../types';

export default function queueInterceptor<T>(interceptorQueue: T[], item: T): TFnVoid {
  interceptorQueue.push(item);
  
  return () => {
    const index = interceptorQueue.indexOf(item);
    
    if (index >= 0) {
      interceptorQueue.splice(index, 1);
    }
  };
}