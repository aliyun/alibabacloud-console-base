import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';

import useMode from './use-mode';
import useDispatchChangeMode from './use-dispatch-change-mode';

export default function useOnMinimize(): () => void {
  const mode = useMode();
  const dispatchChangeMode = useDispatchChangeMode();
  
  return useCallback(() => dispatchChangeMode(mode === EModalMode.MINIMIZED ? EModalMode.FREE : EModalMode.MINIMIZED), [mode, dispatchChangeMode]);
}
