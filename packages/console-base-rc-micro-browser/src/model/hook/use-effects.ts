import useEffectPushBody from './use-effect-push-body';
import useEffectObserveDocumentResize from './use-effect-observe-document-resize';

export default function useEffects(): void {
  useEffectPushBody();
  useEffectObserveDocumentResize();
}