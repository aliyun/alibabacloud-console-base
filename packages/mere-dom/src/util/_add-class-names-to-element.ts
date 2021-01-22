import _uniq from 'lodash/uniq';

import getClassNames from './_get-class-names';

export default function addClassNamesToElement(el: Element, classNames: string[]): void {
  if (el.classList) {
    classNames.forEach(v => el.classList.add(v));
    
    return;
  }
  
  const classNamesNew = _uniq([...getClassNames(el.className), ...classNames]);
  
  el.className = classNamesNew.join(' ');
}
