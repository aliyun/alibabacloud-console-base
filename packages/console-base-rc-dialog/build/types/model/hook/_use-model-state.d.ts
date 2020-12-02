import { TDialogData } from '../../types';
import { IContextState } from '../types';
export default function useModelState<T = void, D = TDialogData>(): IContextState<T, D>;
