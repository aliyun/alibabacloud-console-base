import {
  EDialogMode
} from '../..';

import useModelState from './_use-model-state';
import usePropMode from './use-prop-mode';

/**
 * Normal 模式下需要对内容区域限高
 */
export default function useDialogMaxContentHeight(): number {
  const mode = usePropMode();
  const {
    windowHeight
  } = useModelState();
  
  if (mode === EDialogMode.SLIDE) {
    return -1;
  }
  
  return windowHeight - 200; // 这里的逻辑比较浅，没有考虑是否有 title 和 按钮等
}
