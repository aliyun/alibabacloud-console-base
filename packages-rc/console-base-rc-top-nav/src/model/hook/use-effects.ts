import useEffectToggleBodyClass from './use-effect-toggle-body-class';
import useEffectClearDockActivateTimer from './use-effect-clear-dock-activate-timer';

export default function useEffects(): void {
  useEffectToggleBodyClass();
  useEffectClearDockActivateTimer();
}
