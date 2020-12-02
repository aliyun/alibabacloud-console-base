import { IHijacker } from '../types';
/**
 * 处理一个 hijacker 对象
 */
export default function handleClickHijacker<T>(el: HTMLElement, e: MouseEvent, hijacker: IHijacker<T>): boolean;
