import {
  IHijacker
} from '../types';
import createClickHandler from '../util/create-click-handler';
import handleClickHijacker from '../util/handle-click-hijacker';

/**
 * 注册一个容器内的局部劫持点击事件，返回的方法可用以解除劫持。
 */
export default function hijackClickInDom<T>(container: HTMLElement, hijacker: IHijacker<T>, inCapturePhase?: boolean): () => void {
  const fn = createClickHandler((el, e): boolean => {
    return handleClickHijacker<T>(el, e, hijacker);
  }, container);
  
  container.addEventListener('click', fn, inCapturePhase);
  
  return () => container.removeEventListener('click', fn, inCapturePhase);
}
