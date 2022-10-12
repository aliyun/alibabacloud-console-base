import useEffectResizeObserver from './use-effect-resize-observer';
import useEffectAdjustNavWidth from './use-effect-adjust-nav-width';

export default function useEffects(): void {
  useEffectResizeObserver();
  useEffectAdjustNavWidth();
}
