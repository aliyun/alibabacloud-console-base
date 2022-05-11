import getBlInitialized from './get-bl-initialized';
import pipe from './pipe';

export default function armsAvg(key: string, value?: number): void {
  const bl = getBlInitialized();
  
  if (bl?.avg) {
    bl.avg(key, value);
  } else {
    pipe('avg', [key, value]);
  }
}
