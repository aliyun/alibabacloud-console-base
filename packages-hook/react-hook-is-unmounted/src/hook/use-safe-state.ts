import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState
} from 'react';

import useIsUnmounted from './use-is-unmounted';

export default function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState<S>(initialState);
  const isUnmounted = useIsUnmounted();
  
  const setSafeState = useCallback((v: SetStateAction<S>): void => {
    if (!isUnmounted()) {
      setState(v);
    }
  }, [isUnmounted]);
  
  return [state, setSafeState];
}