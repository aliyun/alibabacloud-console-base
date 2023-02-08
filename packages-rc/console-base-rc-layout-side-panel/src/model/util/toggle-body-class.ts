import {
  addClass,
  removeClass
} from '@alicloud/mere-dom';

import {
  BODY_CLASS_WITH_SIDE_PANEL
} from '../const';

export default function toggleBodyClass(yes = true): void {
  if (yes) {
    addClass(document.body, BODY_CLASS_WITH_SIDE_PANEL);
  } else {
    removeClass(document.body, BODY_CLASS_WITH_SIDE_PANEL);
  }
}
