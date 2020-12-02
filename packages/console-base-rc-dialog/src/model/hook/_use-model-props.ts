import {
  TDialogData
} from '../../types';
import {
  IContextProps
} from '../types';

import useModelContext from './_use-model-context';

/**
 * 返回 PROPS
 */
export default function useModelProps<T = void, D = TDialogData>(): IContextProps<T, D> {
  const {
    PROPS
  } = useModelContext<T, D>();
  
  return PROPS;
}
