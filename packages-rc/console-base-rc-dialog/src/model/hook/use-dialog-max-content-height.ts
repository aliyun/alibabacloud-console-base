import {
  EDialogMode
} from '../../enum';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

/**
 * Normal 模式下需要对内容区域限高
 */
export default function useDialogMaxContentHeight(): number {
  const {
    mode
  } = useModelProps();
  const {
    windowHeight
  } = useModelState();
  
  if (mode === EDialogMode.SLIDE || mode === EDialogMode.SLIDE_UP) {
    return -1;
  }
  
  return windowHeight - 200; // 这里的逻辑比较浅，没有考虑是否有 title 和 按钮等
}
