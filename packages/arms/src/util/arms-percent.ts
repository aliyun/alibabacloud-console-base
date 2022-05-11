import getBlInitialized from './get-bl-initialized';
import pipe from './pipe';

export default function armsPercent(key: string, subKey: string, value?: number): void {
  const bl = getBlInitialized();
  
  if (bl?.percent) {
    bl.percent(key, subKey, value);
  } else {
    pipe('percent', [key, subKey, value]);
  }
}
