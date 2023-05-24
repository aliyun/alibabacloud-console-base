import useEffectStartPolling from './use-effect-start-polling';
import useEffectRefocus from './use-effect-refocus';

export default function useEffects(): void {
  useEffectStartPolling();
  useEffectRefocus();
}
