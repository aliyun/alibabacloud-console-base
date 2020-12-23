import {
  TSelector
} from '../types';

import find from './find';

/**
 * 删除 DOM
 */
export default function remove(selector: TSelector): void {
  find(selector).forEach(v => {
    if (v.parentNode) {
      v.parentNode.removeChild(v);
    }
  });
}
