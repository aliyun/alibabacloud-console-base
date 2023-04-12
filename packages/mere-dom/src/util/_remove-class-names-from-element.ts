import {
  without as _without
} from 'lodash-es';

import getClassNames from './_get-class-names';

export default function removeClassNamesFromElement(el: Element, classNames: string[]): void {
  if (el.classList) {
    classNames.forEach(v => el.classList.remove(v));
    
    return;
  }
  
  const classNamesNew = _without(getClassNames(el.className), ...classNames);
  
  el.className = classNamesNew.join(' ');
}
