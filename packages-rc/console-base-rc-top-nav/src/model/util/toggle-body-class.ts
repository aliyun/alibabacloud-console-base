import {
  addClass,
  removeClass
} from '@alicloud/mere-dom';

import {
  CLASS_BODY_WITH_TOP_NAV_FIXED
} from '../const';

export default function toggleBodyClass(yes = true): void {
  if (yes) {
    addClass(document.body, CLASS_BODY_WITH_TOP_NAV_FIXED);
  } else {
    removeClass(document.body, CLASS_BODY_WITH_TOP_NAV_FIXED);
  }
}
