import getBlInitialized from './get-bl-initialized';
import pipe from './pipe';

export default function armsSetPage(page: string, sendPv?: boolean): void {
  const bl = getBlInitialized();
  
  if (bl?.setPage) {
    bl.setPage(page, sendPv);
  } else {
    pipe('setPage', [page, sendPv]);
  }
}
