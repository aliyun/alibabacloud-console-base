import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';

import useDispatchChangeMode from './use-dispatch-change-mode';
import useStickRightActive from './use-stick-right-active';

export default function useOnStickRight(): () => void {
  const dispatchChangeMode = useDispatchChangeMode();
  const active = useStickRightActive();
  
  return useCallback(() => dispatchChangeMode(active ? EModalMode.FREE : EModalMode.TO_THE_RIGHT), [active, dispatchChangeMode]);
}
