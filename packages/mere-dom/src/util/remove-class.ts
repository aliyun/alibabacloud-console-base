import {
  TSelector,
  TParent
} from '../types';

import getClassNames from './_get-class-names';
import removeClassNamesFromElement from './_remove-class-names-from-element';
import find from './find';

/**
 * 删除 className
 */
export default function removeClass(selector: TSelector, className: string, parent?: TParent): void {
  const classNames = getClassNames(className);
  
  if (!classNames.length) {
    return;
  }
  
  find(selector, parent).forEach(v => {
    removeClassNamesFromElement(v, classNames);
  });
}
