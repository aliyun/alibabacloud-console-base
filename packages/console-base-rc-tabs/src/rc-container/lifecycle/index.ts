import {
  useEffectResizeObserver,
  useEffectAdjustNavWidth
} from '../../model';

export default function Lifecycle(): null {
  useEffectResizeObserver();
  useEffectAdjustNavWidth();
  
  return null;
}
