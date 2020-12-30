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
} from '../types';
import {
  EButtonSize
} from '../const';

const MAPPING: Record<EButtonSize, FlattenSimpleInterpolation | null> = {
  [EButtonSize.NONE]: null,
  [EButtonSize.XS]: mixinButtonSizeXs,
  [EButtonSize.S]: mixinButtonSizeS,
  [EButtonSize.M]: mixinButtonSizeM,
  [EButtonSize.L]: mixinButtonSizeL,
  [EButtonSize.XL]: mixinButtonSizeXl
};

export default css<IButtonPropsForSc>`
  ${props => MAPPING[props.size]}
`;
