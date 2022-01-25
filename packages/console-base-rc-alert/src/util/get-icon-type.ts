import {
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  EAlertTheme
} from '../enum';

export default function getIconType(theme: EAlertTheme): IconType | null {
  switch (theme) {
    case EAlertTheme.HELP:
      return 'help-circle';
    case EAlertTheme.INFO:
      return 'info-circle';
    case EAlertTheme.SUCCESS:
      return 'success-circle';
    case EAlertTheme.WARNING:
      return 'alert-circle';
    case EAlertTheme.ERROR:
      return 'error-circle';
    case EAlertTheme.LOADING:
      return 'loading';
    default:
      return null;
  }
}