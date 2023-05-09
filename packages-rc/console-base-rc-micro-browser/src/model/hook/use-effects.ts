import useEffectPushBody from './use-effect-push-body';
import useEffectToggleBodyClass from './use-effect-toggle-body-class';
import useEffectObserveWindowResize from './use-effect-observe-window-resize';
import useEffectReset from './use-effect-reset';

export default function useEffects(): void {
  useEffectPushBody();
  useEffectToggleBodyClass();
  useEffectObserveWindowResize();
  useEffectReset();
}
