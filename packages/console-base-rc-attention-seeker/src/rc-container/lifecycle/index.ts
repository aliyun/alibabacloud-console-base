import {
  useEffectModifyElementClass,
  useEffectCalcRect,
  useEffectBindCloseToElement,
  useEffectWatchTimestamp,
  useEffectObserveResize
} from '../../model';

export default function Lifecycle(): null {
  useEffectModifyElementClass();
  useEffectCalcRect();
  useEffectBindCloseToElement();
  useEffectWatchTimestamp();
  useEffectObserveResize();
  
  return null;
}
