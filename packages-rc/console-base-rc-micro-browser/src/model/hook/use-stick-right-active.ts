import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';

export default function useStickRightActive(): boolean {
  const mode = useMode();
  
  return mode === EMicroBrowserMode.PINNED;
}
