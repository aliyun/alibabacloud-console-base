import {
  EDialogMode
} from '../enum';

import useModelState from './_use-model-state';
import useDialogMode from './use-dialog-mode';

/**
 * Normal 模式下需要对内容区域限高
 */
export default function useDialogMaxContentHeight(): number {
  const {
    windowHeight
  } = useModelState();
  const dialogMode = useDialogMode();
  
  if (dialogMode === EDialogMode.SLIDE || dialogMode === EDialogMode.SLIDE_UP) {
    return -1;
  }
  
  return windowHeight - 200; // 这里的逻辑比较浅，没有考虑是否有 title 和 按钮等
}
