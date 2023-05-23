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
  AlertTheme
} from '../../model';

export default function getCssBd(theme: AlertTheme, toast?: boolean): FlattenSimpleInterpolation | null {
  if (!toast) {
    return null;
  }
  
  switch (theme) {
    case AlertTheme.HELP:
      return mixinBorderHelpLeft;
    case AlertTheme.INFO:
      return mixinBorderInfoLeft;
    case AlertTheme.SUCCESS:
      return mixinBorderSuccessLeft;
    case AlertTheme.WARNING:
      return mixinBorderWarningLeft;
    case AlertTheme.ERROR:
      return mixinBorderErrorLeft;
    // case AlertTheme.LOADING:
    default:
      return css`
        border-left: 4px solid transparent;
      `;
  }
}
