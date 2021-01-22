import {
  EModalMode
} from '../../const';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

/**
 * 当前模式
 */
export default function useMode(): EModalMode {
  const {
    mode: modeInState
  } = useModelState();
  const {
    mode = modeInState
  } = useModelProps();
  
  return mode;
}
