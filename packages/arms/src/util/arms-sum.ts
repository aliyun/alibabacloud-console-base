import getBlInitialized from './get-bl-initialized';
import pipe from './pipe';

export default function armsSum(key: string, value?: number): void {
  const bl = getBlInitialized();
  
  if (bl?.sum) {
    bl.sum(key, value);
  } else {
    pipe('sum', [key, value]);
  }
}
