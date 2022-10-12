import {
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  AlertTheme
} from '../model';

export default function getIconType(theme: AlertTheme): IconType | null {
  switch (theme) {
    case AlertTheme.HELP:
      return 'help-circle';
    case AlertTheme.INFO:
      return 'info-circle';
    case AlertTheme.SUCCESS:
      return 'success-circle';
    case AlertTheme.WARNING:
      return 'alert-circle';
    case AlertTheme.ERROR:
      return 'error-circle';
    case AlertTheme.LOADING:
      return 'loading';
    default:
      return null;
  }
}