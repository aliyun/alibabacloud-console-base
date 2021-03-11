import {
  EModalMode
} from '../../const';

import useModelState from './_use-model-state';
import useProps from './use-props';

/**
 * 当前模式
 */
export default function useMode(): EModalMode {
  const {
    mode: modeInState
  } = useModelState();
  const {
    mode = modeInState
  } = useProps();
  
  return mode;
}
