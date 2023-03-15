import {
  addClass,
  removeClass
} from '@alicloud/mere-dom';

const CLASS_BODY_WITH_TOP_NAV_FIXED = 'hasTopbar'; // 不要轻易改这个值，在本组件里都有耦合（只是不想为它起个常量）

export default function toggleBodyClass(yes = true): void {
  if (yes) {
    addClass(document.body, CLASS_BODY_WITH_TOP_NAV_FIXED);
  } else {
    removeClass(document.body, CLASS_BODY_WITH_TOP_NAV_FIXED);
  }
}
