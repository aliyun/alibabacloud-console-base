import {
  EModalMode
} from '../enum';

import useMode from './use-mode';

export default function useRndDraggingDisabled(): boolean {
  const mode = useMode();
  
  return mode !== EModalMode.FREE;
}
