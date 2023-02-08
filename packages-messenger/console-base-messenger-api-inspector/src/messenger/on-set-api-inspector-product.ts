import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  SET_API_INSPECTOR_PRODUCT
} from '../const';

export default function onSetApiInspectorProduct(fn: (payload: string) => void): void {
  subscribeByConsoleBase<string>(SET_API_INSPECTOR_PRODUCT, fn);
}
