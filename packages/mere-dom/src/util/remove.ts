import {
  TSelector,
  TParent
} from '../types';

import find from './find';

/**
 * 删除 DOM
 */
export default function remove(selector: TSelector, parent?: TParent): void {
  find(selector, parent).forEach(v => {
    v.parentNode?.removeChild(v);
  });
}
