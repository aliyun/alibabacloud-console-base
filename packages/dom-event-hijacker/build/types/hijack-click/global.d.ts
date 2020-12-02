import { IHijacker } from '../types';
/**
 * 注册一个全局劫持点击的事件，返回的方法可用以解除劫持。
 */
export default function hijackClickGlobal<T>(hijacker: IHijacker<T>): () => void;
