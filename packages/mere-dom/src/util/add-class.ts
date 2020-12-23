import {
  TSelector
} from '../types';

import getClassNames from './_get-class-names';
import addClassNamesToElement from './_add-class-names-to-element';
import find from './find';

export default function addClass(selector: TSelector, className: string): void {
  const classNames = getClassNames(className);
  
  if (!classNames.length) {
    return;
  }
  
  find(selector).forEach(v => {
    addClassNamesToElement(v, classNames);
  });
}
