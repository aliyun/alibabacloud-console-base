import useEffectPushBody from './use-effect-push-body';
import useEffectObserveDocumentResize from './use-effect-observe-document-resize';
import useEffectReset from './use-effect-reset';

export default function useEffects(): void {
  useEffectPushBody();
  useEffectObserveDocumentResize();
  useEffectReset();
}