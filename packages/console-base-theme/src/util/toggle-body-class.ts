import {
  addClass,
  removeClass
} from '@alicloud/mere-dom';

const CLASS_THEME_DARK = 'theme-dark';

export default function toggleBodyClass(dark = true): void {
  if (dark) {
    addClass(document.body, CLASS_THEME_DARK);
  } else {
    removeClass(document.body, CLASS_THEME_DARK);
  }
}
