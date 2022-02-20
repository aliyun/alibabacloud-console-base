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
  AlertTheme
} from '../model';

export default function getIconColor(theme: AlertTheme): FlattenSimpleInterpolation | null {
  switch (theme) {
    case AlertTheme.HELP:
      return null;
    case AlertTheme.INFO:
      return mixinTextInfo;
    case AlertTheme.SUCCESS:
      return mixinTextSuccess;
    case AlertTheme.WARNING:
      return mixinTextWarning;
    case AlertTheme.ERROR:
      return mixinTextError;
    case AlertTheme.LOADING:
      return null;
    default:
      return null;
  }
}