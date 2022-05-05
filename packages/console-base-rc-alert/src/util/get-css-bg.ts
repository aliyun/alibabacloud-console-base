import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgHelpTint,
  mixinBgInfoTint,
  mixinBgSuccessTint,
  mixinBgWarningTint,
  mixinBgErrorTint
} from '@alicloud/console-base-theme';

import {
  AlertTheme
} from '../model';

export default function getCssBg(theme: AlertTheme, toast?: boolean): FlattenSimpleInterpolation | null {
  if (toast) {
    return mixinBgPrimary;
  }
  
  switch (theme) {
    case AlertTheme.HELP:
      return mixinBgHelpTint;
    case AlertTheme.INFO:
      return mixinBgInfoTint;
    case AlertTheme.SUCCESS:
      return mixinBgSuccessTint;
    case AlertTheme.WARNING:
      return mixinBgWarningTint;
    case AlertTheme.ERROR:
      return mixinBgErrorTint;
    case AlertTheme.LOADING:
      return mixinBgPrimary;
    default:
      return null;
  }
}