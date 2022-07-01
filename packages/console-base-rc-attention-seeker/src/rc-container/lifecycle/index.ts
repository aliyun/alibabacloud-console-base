import {
  useEffectScrollInToView,
  useEffectCalcRect,
  useEffectBindCloseToElement,
  useEffectWatchTimestamp,
  useEffectObserveResize
} from '../../model';

export default function Lifecycle(): null {
  useEffectScrollInToView();
  useEffectCalcRect();
  useEffectBindCloseToElement();
  useEffectWatchTimestamp();
  useEffectObserveResize();
  
  return null;
}
