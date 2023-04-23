import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinButtonShadow
} from '@alicloud/console-base-theme';

import {
  EButtonTheme,
  IModelProps
} from '../../model';

const THEMES_NEED_SHADOW: EButtonTheme[] = [
  EButtonTheme.DANGER,
  EButtonTheme.PRIMARY,
  EButtonTheme.SECONDARY,
  EButtonTheme.SECONDARY_ALT,
  EButtonTheme.BRAND_PRIMARY,
  EButtonTheme.BRAND_SECONDARY,
  EButtonTheme.BRAND_SECONDARY_ALT
];

export default function getMixinShadow(props: IModelProps): FlattenSimpleInterpolation | null {
  if (props.noShadow || props.disabled || props.loading || props.active) {
    return null;
  }
  
  if (props.theme && THEMES_NEED_SHADOW.includes(props.theme)) {
    return mixinButtonShadow;
  }
  
  return null;
}
