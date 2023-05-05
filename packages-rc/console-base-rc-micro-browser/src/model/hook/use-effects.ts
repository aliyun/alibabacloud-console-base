import useEffectPushBody from './use-effect-push-body';
import useEffectToggleBodyClass from './use-effect-toggle-body-class';
import useEffectObserveDocumentResize from './use-effect-observe-document-resize';
import useEffectReset from './use-effect-reset';

export default function useEffects(): void {
  useEffectPushBody();
  useEffectToggleBodyClass();
  useEffectObserveDocumentResize();
  useEffectReset();
}
