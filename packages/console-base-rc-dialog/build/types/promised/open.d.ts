import { TDialogData, TStringOrJSX, IDialogProps } from '../types';
interface IFnOpen {
    (content?: TStringOrJSX): Promise<void>;
    <T = void, D = TDialogData>(props: IDialogProps<T, D>): Promise<T>;
}
interface IFnOpenWithMode {
    (content?: TStringOrJSX): Promise<void>;
    <T = void, D = TDialogData>(props: Omit<IDialogProps<T, D>, 'mode'>): Promise<T>;
}
/**
 * 通过方法调用，你无需也不能再利用 onClose 关闭/销毁 Dialog，因为你有更棒的 Promise。
 *
 * @example
 *
 * ```typescript
 * // 只关心内容（没有按钮）
 * open(content).then(...);
 * open(<Content />).then(...);
 *
 * // 各种自定义：标题、内容、按钮...
 * open({
 *   title,
 *   content,
 *   buttons,
 *   ...
 * }).then(...);
 * ```
 */
declare const open: IFnOpen;
export default open;
/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */
export declare const slide: IFnOpenWithMode;
/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */
export declare const slideUp: IFnOpenWithMode;
