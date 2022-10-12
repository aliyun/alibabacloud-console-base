import useEffectAutoCloseStart from './use-effect-auto-close-start';
import useEffectAutoCloseTick from './use-effect-auto-close-tick';

export default function useEffects(): void {
  useEffectAutoCloseStart();
  useEffectAutoCloseTick();
}
