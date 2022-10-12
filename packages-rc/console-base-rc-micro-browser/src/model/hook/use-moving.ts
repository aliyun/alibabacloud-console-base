import useModelState from './_use-model-state';

/**
 * 是否正在移动（拖拽挪动或缩放中）
 */
export default function useMoving(): boolean {
  const {
    dragging,
    resizing
  } = useModelState();
  
  return dragging || resizing >= 0;
}
