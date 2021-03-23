import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

export default function avg(key: string, value?: number): void {
  const bl = getBlInitialized();
  
  if (bl?.avg) {
    bl.avg(key, value);
  } else {
    pipe('avg', [key, value]);
  }
}
