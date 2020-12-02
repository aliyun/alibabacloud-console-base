import { IDialogProps, TDialogData, TStringOrJSX } from '../types';
/**
 * promise dialog 需要的 props
 */
export default function buildPropsForPromise<R = void, D = TDialogData>(contentOrProps?: TStringOrJSX | IDialogProps<R, D>, fixedProps?: IDialogProps<R, D>, defaultProps?: IDialogProps<R, D>): IDialogProps<R, D>;
