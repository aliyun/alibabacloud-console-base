import { TDialogData } from '../../types';
export default function useDispatchUpdateData<D = TDialogData>(): (data: D) => void;
