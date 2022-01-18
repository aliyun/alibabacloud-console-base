import {
  EModalMode
} from '../enum';

import useMode from './use-mode';

export default function useStickRightActive(): boolean {
  const mode = useMode();
  
  return mode === EModalMode.TO_THE_RIGHT || mode === EModalMode.TO_THE_RIGHT_PINNED;
}
