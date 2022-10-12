import useEffectAttention from './use-effect-attention';
import useEffectRefreshAttentionRect from './use-effect-refresh-attention-rect';
import useEffectBindCloseToElement from './use-effect-bind-close-to-element';
import useEffectObserveResizeOfAttentionElement from './use-effect-observe-resize-of-attention-element';
import useEffectObserveResizeOfWindow from './use-effect-observe-resize-of-window';
import useEffectObserveScroll from './use-effect-observe-scroll';

export default function useEffects(): void {
  useEffectAttention();
  useEffectRefreshAttentionRect();
  useEffectBindCloseToElement();
  useEffectObserveResizeOfAttentionElement();
  useEffectObserveResizeOfWindow();
  useEffectObserveScroll();
}