import {
  addClass,
  removeClass
} from '@alicloud/mere-dom';

const BODY_CLASS = 'hasTopbar'; // 不要轻易改这个值，在本组件里都有耦合（只是不想为它起个常量）

export default function toggleBodyClass(yes = true): void {
  if (yes) {
    addClass(document.body, BODY_CLASS);
  } else {
    removeClass(document.body, BODY_CLASS);
  }
}
