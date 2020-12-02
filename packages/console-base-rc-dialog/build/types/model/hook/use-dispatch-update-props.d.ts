import { IDialogPropsMutable, TDialogData } from '../../types';
export default function useDispatchUpdateProps<T = void, D = TDialogData>(): (payload: IDialogPropsMutable<T, D>) => void;
