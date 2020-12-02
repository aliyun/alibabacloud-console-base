import { IDialogStackItem } from '../types';
/**
 * 压栈，每打开一个 Dialog 向各个堆栈中推入一个，并返回出栈方法（可用于 useEffect）
 */
export default function pushStackAll(dialogId: string, item: IDialogStackItem): () => void;
/**
 * 对顶层的 Dialog 进行聚焦，由 Dialog 自己手动调用（当它想在 did mount 之后重设焦点的时候）。
 */
export declare function focusDialog(domDialog: HTMLDivElement, domDialogContent: HTMLDivElement): void;
