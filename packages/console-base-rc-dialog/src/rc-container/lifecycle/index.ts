import {
  useEffectPushStack,
  useEffectDidMount,
  useEffectAutoFocus,
  useEffectAdjustHeight,
  useEffectFocusBack
} from '../../model';

export default function Lifecycle(): null {
  useEffectPushStack(); // stack 需要放在第一个
  useEffectDidMount();
  useEffectAutoFocus();
  useEffectAdjustHeight();
  useEffectFocusBack();
  
  return null;
}
