import useEffectLaunchFromUrl from './use-effect-launch-from-url';
import useEffectHijackOpen from './use-effect-hijack-open';
import useEffectHijackClose from './use-effect-hijack-close';
import useEffectOnOpenTutor from './use-effect-on-open-tutor';
import useEffectOnCloseTutor from './use-effect-on-close-tutor';

export default function useEffects(): void {
  useEffectLaunchFromUrl();
  useEffectHijackOpen();
  useEffectHijackClose();
  useEffectOnOpenTutor();
  useEffectOnCloseTutor();
}