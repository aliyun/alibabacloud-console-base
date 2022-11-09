import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_OPEN_URL
} from '../const';

export default function onOpenTutor(fn: (payload: string) => void): () => void {
  return subscribeByConsoleBase<string>(MESSAGE_TYPE_OPEN_URL, payload => {
    if (payload) {
      fn(payload);
    }
  });
}
