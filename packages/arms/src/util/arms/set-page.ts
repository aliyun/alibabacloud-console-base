import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

export default function setPage(page: string, sendPv?: boolean): void {
  const bl = getBlInitialized();
  
  if (bl?.setPage) {
    bl.setPage(page, sendPv);
  } else {
    pipe('setPage', [page, sendPv]);
  }
}
