import {
  useEffectResizeObserver
} from '../../model';

export default function Lifecycle(): JSX.Element | null {
  useEffectResizeObserver();
  
  return null;
}
