import { IHijacker } from '../types';
/**
 * 注册一个容器内的局部劫持点击事件，返回的方法可用以解除劫持。
 */
export default function hijackClickInDom<T>(container: HTMLElement, hijacker: IHijacker<T>, inCapturePhase?: boolean): () => void;
