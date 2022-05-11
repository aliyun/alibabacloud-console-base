import {
  useEffectToggleBodyClass,
  useEffectClearDockActivateTimer
} from '../../model';

export default function Lifecycle(): null {
  useEffectToggleBodyClass();
  useEffectClearDockActivateTimer();
  
  return null;
}
