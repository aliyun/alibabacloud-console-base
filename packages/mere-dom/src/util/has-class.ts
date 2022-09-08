import {
  TSelector,
  TParent
} from '../types';

import getClassNames from './_get-class-names';
import find from './find';

export default function hasClass(selector: TSelector, className: string, parent?: TParent): boolean {
  const classNames = getClassNames(className);
  
  if (!classNames.length) {
    return false;
  }
  
  return find(selector, parent).every(v => {
    const classNamesOfEl = getClassNames(v.className);
    
    return classNames.every(vv => classNamesOfEl.includes(vv));
  });
}
