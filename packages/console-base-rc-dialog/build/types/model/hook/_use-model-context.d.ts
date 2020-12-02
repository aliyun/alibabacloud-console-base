import { TDialogData } from '../../types';
import { IContext } from '../types';
export default function useModelContext<T = void, D = TDialogData>(): IContext<T, D>;
