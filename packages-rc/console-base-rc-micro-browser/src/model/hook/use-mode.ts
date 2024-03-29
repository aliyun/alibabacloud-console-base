import {
  EMicroBrowserMode
} from '../enum';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

/**
 * 当前模式
 */
export default function useMode(): EMicroBrowserMode {
  const {
    mode
  } = useModelProps();
  const {
    mode: modeInState
  } = useModelState();
  
  return mode ?? modeInState;
}
