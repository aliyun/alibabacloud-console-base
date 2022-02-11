import getBlInitialized from './get-bl-initialized';
import pipe from './pipe';

export default function armsSetCommonInfo<T>(info: T): void {
  const bl = getBlInitialized();
  
  if (bl?.setCommonInfo) {
    bl.setCommonInfo<T>(info);
  } else {
    pipe('setCommonInfo', [info]);
  }
}
