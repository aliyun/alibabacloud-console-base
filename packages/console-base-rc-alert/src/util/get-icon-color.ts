import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinTextInfo,
  mixinTextSuccess,
  mixinTextWarning,
  mixinTextError
} from '@alicloud/console-base-theme';

import {
  EAlertTheme
} from '../enum';

export default function getIconColor(theme: EAlertTheme): FlattenSimpleInterpolation | null {
  switch (theme) {
    case EAlertTheme.HELP:
      return null;
    case EAlertTheme.INFO:
      return mixinTextInfo;
    case EAlertTheme.SUCCESS:
      return mixinTextSuccess;
    case EAlertTheme.WARNING:
      return mixinTextWarning;
    case EAlertTheme.ERROR:
      return mixinTextError;
    case EAlertTheme.LOADING:
      return null;
    default:
      return null;
  }
}