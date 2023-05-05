import {
  addClass,
  removeClass
} from '@alicloud/mere-dom';

import {
  BODY_CLASS_WITH_MICRO_BROWSER
} from '../const';

export default function toggleBodyClass(yes = true): void {
  if (yes) {
    addClass(document.body, BODY_CLASS_WITH_MICRO_BROWSER);
  } else {
    removeClass(document.body, BODY_CLASS_WITH_MICRO_BROWSER);
  }
}
