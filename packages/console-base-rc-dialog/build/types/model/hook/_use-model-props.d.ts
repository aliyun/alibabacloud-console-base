import { TDialogData } from '../../types';
import { IContextProps } from '../types';
/**
 * 返回 PROPS
 */
export default function useModelProps<T = void, D = TDialogData>(): IContextProps<T, D>;
