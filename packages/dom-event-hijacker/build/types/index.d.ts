import { IHijacker as Interceptor } from './types';
import { DATA_CLICK_HIJACK_IGNORE } from './const';
import hijackClickGlobal from './hijack-click/global';
import hijackClickInDom from './hijack-click/in-dom';
export default hijackClickGlobal;
export { DATA_CLICK_HIJACK_IGNORE, hijackClickInDom };
export type { Interceptor };
