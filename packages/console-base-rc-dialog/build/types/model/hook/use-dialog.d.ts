import { TDialogData } from '../../types';
import { IContextForContent } from '../types';
/**
 * 给 content 使用的 hook
 */
export default function useDialog<T = void, D = TDialogData>(): IContextForContent<T, D>;
