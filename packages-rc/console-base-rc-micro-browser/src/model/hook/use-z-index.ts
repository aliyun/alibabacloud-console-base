import {
  Z_INDEX
} from '@alicloud/console-base-theme';

import {
  EMicroBrowserMode
} from '../enum';

import useModelProps from './_use-model-props';
import useMode from './use-mode';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function useZIndex(): number {
  const {
    visible,
    zIndex
  } = useModelProps();
  const mode = useMode();
  
  return !visible || mode === EMicroBrowserMode.MINIMIZED ? 0 : zIndex ?? Z_INDEX.MICRO_BROWSER;
}
