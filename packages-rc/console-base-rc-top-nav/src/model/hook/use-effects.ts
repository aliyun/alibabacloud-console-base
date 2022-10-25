import useEffectObserveResize from './use-effect-observe-resize';
import useEffectToggleBodyClass from './use-effect-toggle-body-class';
import useEffectClearDockActivateTimer from './use-effect-clear-dock-activate-timer';

export default function useEffects(): void {
  useEffectObserveResize();
  useEffectToggleBodyClass();
  useEffectClearDockActivateTimer();
}
