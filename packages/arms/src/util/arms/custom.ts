import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

export default function custom<T>(info: T, sampling?: number): void {
  const bl = getBlInitialized();
  
  if (bl?.custom) {
    bl.custom<T>(info, sampling);
  } else {
    pipe('custom', [info, sampling]);
  }
}
