import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';

export default function usePinned(): boolean {
  const mode = useMode();
  
  return mode === EMicroBrowserMode.PINNED;
}
