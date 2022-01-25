import {
  css,
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinBorderHelpLeft,
  mixinBorderInfoLeft,
  mixinBorderSuccessLeft,
  mixinBorderWarningLeft,
  mixinBorderErrorLeft
} from '@alicloud/console-base-theme';

import {
  EAlertTheme
} from '../enum';

export default function getCssBd(theme: EAlertTheme, toast?: boolean): FlattenSimpleInterpolation | null {
  if (toast) {
    switch (theme) {
      case EAlertTheme.HELP:
        return mixinBorderHelpLeft;
      case EAlertTheme.INFO:
        return mixinBorderInfoLeft;
      case EAlertTheme.SUCCESS:
        return mixinBorderSuccessLeft;
      case EAlertTheme.WARNING:
        return mixinBorderWarningLeft;
      case EAlertTheme.ERROR:
        return mixinBorderErrorLeft;
      // case EAlertTheme.LOADING:
      default:
        return css`
          border-left: 4px solid transparent;
        `;
    }
  }
  
  return null;
}