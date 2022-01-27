import {
  useEffectHideOnEsc,
  useEffectHideWhenDisabled
} from '../../model';

export default function Lifecycle(): null {
  useEffectHideWhenDisabled();
  useEffectHideOnEsc();
  
  return null;
}
