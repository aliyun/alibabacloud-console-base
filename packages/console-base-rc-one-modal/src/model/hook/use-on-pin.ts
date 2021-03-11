import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';

import useMode from './use-mode';
import useDispatchChangeMode from './use-dispatch-change-mode';

export default function useOnPin(): () => void {
  const mode = useMode();
  const dispatchChangeMode = useDispatchChangeMode();
  const active = mode === EModalMode.TO_THE_RIGHT_PINNED;
  
  return useCallback(() => dispatchChangeMode(active ? EModalMode.TO_THE_RIGHT : EModalMode.TO_THE_RIGHT_PINNED), [active, dispatchChangeMode]);
}
