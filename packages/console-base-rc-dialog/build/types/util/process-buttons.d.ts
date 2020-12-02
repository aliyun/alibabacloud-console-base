import { IDialogButtonProps, TDialogButton, TDialogData } from '../types';
import { EDialogLockState } from '../const';
/**
 * 获得最终用于展示的按钮 props
 */
export default function processButtons<R = void, D = TDialogData>(buttons: TDialogButton<R, D>[], locked: EDialogLockState): IDialogButtonProps<R, D>[];
