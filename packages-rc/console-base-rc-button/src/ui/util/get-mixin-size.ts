import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinButtonSizeXs,
  mixinButtonSizeS,
  mixinButtonSizeM,
  mixinButtonSizeL,
  mixinButtonSizeXl
} from '@alicloud/console-base-theme';

import {
  EButtonSize,
  EButtonTheme,
  IModelProps
} from '../../model';

const MAPPING: Record<EButtonSize, FlattenSimpleInterpolation | null> = {
  [EButtonSize.NONE]: null,
  [EButtonSize.XS]: mixinButtonSizeXs,
  [EButtonSize.S]: mixinButtonSizeS,
  [EButtonSize.M]: mixinButtonSizeM,
  [EButtonSize.L]: mixinButtonSizeL,
  [EButtonSize.XL]: mixinButtonSizeXl
};

const THEMES_DEFAULT_SIZE_NONE = [
  EButtonTheme.NONE,
  EButtonTheme.TEXT_PRIMARY,
  EButtonTheme.TEXT_SECONDARY,
  EButtonTheme.TEXT_TERTIARY,
  EButtonTheme.TEXT_BRAND_PRIMARY,
  EButtonTheme.TEXT_BRAND_SECONDARY
];

export default function getMixinSize(props: IModelProps): FlattenSimpleInterpolation | null {
  if (props.size) {
    return MAPPING[props.size];
  }
  
  return MAPPING[props.theme && THEMES_DEFAULT_SIZE_NONE.includes(props.theme) ? EButtonSize.NONE : EButtonSize.M];
}
