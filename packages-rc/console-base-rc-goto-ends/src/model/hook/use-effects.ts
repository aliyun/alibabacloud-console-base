import useEffectObserveResize from './use-effect-observe-resize';
import useEffectOnContainerScroll from './use-effect-on-container-scroll';

export default function useEffects(): void {
  useEffectObserveResize();
  useEffectOnContainerScroll();
}
