import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';

export default function useStickRightActive(): boolean {
  const mode = useMode();
  
  return mode === EMicroBrowserMode.TO_THE_RIGHT || mode === EMicroBrowserMode.TO_THE_RIGHT_PINNED;
}
