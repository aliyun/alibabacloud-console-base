import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgHelpTintFade,
  mixinBgInfoTintFade,
  mixinBgSuccessTintFade,
  mixinBgWarningTintFade,
  mixinBgErrorTintFade
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
      return mixinBgHelpTintFade;
    case AlertTheme.INFO:
      return mixinBgInfoTintFade;
    case AlertTheme.SUCCESS:
      return mixinBgSuccessTintFade;
    case AlertTheme.WARNING:
      return mixinBgWarningTintFade;
    case AlertTheme.ERROR:
      return mixinBgErrorTintFade;
    case AlertTheme.LOADING:
      return mixinBgPrimary;
    default:
      return null;
  }
}