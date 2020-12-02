import { IFnClickHandler } from '../types';
/**
 * 创建劫持点击事件的方法（全局劫持和局部劫持的机制只有处理方法和容器是不一样的）
 */
export default function createClickHandler(fn: IFnClickHandler, container: HTMLElement): (e: MouseEvent) => void;
