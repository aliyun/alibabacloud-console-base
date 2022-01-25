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
  EAlertTheme
} from '../enum';

export default function getCssBg(theme: EAlertTheme, toast?: boolean): FlattenSimpleInterpolation | null {
  if (toast) {
    return mixinBgPrimary;
  }
  
  switch (theme) {
    case EAlertTheme.HELP:
      return mixinBgHelpTintFade;
    case EAlertTheme.INFO:
      return mixinBgInfoTintFade;
    case EAlertTheme.SUCCESS:
      return mixinBgSuccessTintFade;
    case EAlertTheme.WARNING:
      return mixinBgWarningTintFade;
    case EAlertTheme.ERROR:
      return mixinBgErrorTintFade;
    case EAlertTheme.LOADING:
      return mixinBgPrimary;
    default:
      return null;
  }
}