import {
  TSpeedPoint
} from '../../types';
import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

export default function speed(point: TSpeedPoint, time?: number): void {
  const bl = getBlInitialized();
  
  if (bl?.speed) {
    bl.speed(point, time);
  } else {
    pipe('speed', [point, time]);
  }
}
