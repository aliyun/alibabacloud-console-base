import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinButtonSizeXs,
  mixinButtonSizeS,
  mixinButtonSizeM,
  mixinButtonSizeL,
  mixinButtonSizeXl
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonSize,
  EButtonTheme
} from '../../enum';

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

function getSize(props: IButtonPropsForSc): EButtonSize {
  if (props.size) {
    return props.size;
  }
  
  return props.theme && THEMES_DEFAULT_SIZE_NONE.includes(props.theme) ? EButtonSize.NONE : EButtonSize.M;
}

export default css<IButtonPropsForSc>`
  ${props => MAPPING[getSize(props)]}
`;
