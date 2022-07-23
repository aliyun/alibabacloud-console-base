import useEffectHideWhenDisabled from './use-effect-hide-when-disabled';
import useEffectHideOnEsc from './use-effect-hide-on-esc';

export default function useEffects(): void {
  useEffectHideWhenDisabled();
  useEffectHideOnEsc();
}
