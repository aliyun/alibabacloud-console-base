import useEffectObserveResizeOfAttentionElement from './use-effect-observe-resize-of-attention-element';
import useEffectObserveResizeOfBackdrop from './use-effect-observe-resize-of-backdrop';
import useEffectObserveResizeOfWindow from './use-effect-observe-resize-of-window';

/**
 * 监听元素的变化，同时监听 backdrop 的变化，以自动修正位置、大小
 */
export default function useEffectObserveResize(): void {
  useEffectObserveResizeOfAttentionElement();
  useEffectObserveResizeOfBackdrop();
  useEffectObserveResizeOfWindow();
}