import useEffectPushStack from './use-effect-push-stack';
import useEffectDidMount from './use-effect-did-mount';
import useEffectAutoFocus from './use-effect-auto-focus';
import useEffectAdjustHeight from './use-effect-adjust-height';
import useEffectFocusBack from './use-effect-focus-back';

export default function useEffects(): void {
  useEffectPushStack(); // stack 需要放在第一个
  useEffectDidMount();
  useEffectAutoFocus();
  useEffectAdjustHeight();
  useEffectFocusBack();
}
