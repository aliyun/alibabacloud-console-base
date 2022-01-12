import {
  useEffectAutoCloseStart,
  useEffectAutoCloseTick
} from '../../model';

export default function Lifecycle(): null {
  useEffectAutoCloseStart();
  useEffectAutoCloseTick();
  
  return null;
}
