import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinButtonDangerStateNormal,
  mixinButtonPrimaryStateNormal,
  mixinButtonSecondaryStateNormal,
  mixinButtonTertiaryStateNormal,
  mixinButtonBrandPrimaryStateNormal,
  mixinButtonBrandSecondaryStateNormal,
  mixinButtonBrandTertiaryStateNormal,
  mixinButtonTextPrimaryStateNormal,
  mixinButtonTextSecondaryStateNormal,
  mixinButtonTextTertiaryStateNormal,
  mixinButtonDanger,
  mixinButtonPrimary,
  mixinButtonSecondary,
  mixinButtonTertiary,
  mixinButtonBrandPrimary,
  mixinButtonBrandSecondary,
  mixinButtonBrandTertiary,
  mixinButtonTextPrimary,
  mixinButtonTextSecondary,
  mixinButtonTextTertiary
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../types';
import {
  EButtonTheme
} from '../const';

const MAPPING_NORMAL: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDangerStateNormal,
  [EButtonTheme.PRIMARY]: mixinButtonPrimaryStateNormal,
  [EButtonTheme.SECONDARY]: mixinButtonSecondaryStateNormal,
  [EButtonTheme.TERTIARY]: mixinButtonTertiaryStateNormal,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimaryStateNormal,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondaryStateNormal,
  [EButtonTheme.BRAND_TERTIARY]: mixinButtonBrandTertiaryStateNormal,
  [EButtonTheme.TEXT_PRIMARY]: mixinButtonTextPrimaryStateNormal,
  [EButtonTheme.TEXT_SECONDARY]: mixinButtonTextSecondaryStateNormal,
  [EButtonTheme.TEXT_TERTIARY]: mixinButtonTextTertiaryStateNormal
};

const MAPPING: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDanger,
  [EButtonTheme.PRIMARY]: mixinButtonPrimary,
  [EButtonTheme.SECONDARY]: mixinButtonSecondary,
  [EButtonTheme.TERTIARY]: mixinButtonTertiary,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimary,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondary,
  [EButtonTheme.BRAND_TERTIARY]: mixinButtonBrandTertiary,
  [EButtonTheme.TEXT_PRIMARY]: mixinButtonTextPrimary,
  [EButtonTheme.TEXT_SECONDARY]: mixinButtonTextSecondary,
  [EButtonTheme.TEXT_TERTIARY]: mixinButtonTextTertiary
};

const cssCursorLoading = css`
  cursor: default;
`;

export default css<IButtonPropsForSc>`
  ${props => { // loading 的时候没有 hover 样式
    if (props.loading && !props.disabled) {
      return MAPPING_NORMAL[props.theme];
    }
    
    return MAPPING[props.theme];
  }}
  ${props => { // loading 的 cursor 在非 disabled 状态下为箭头
    if (props.loading && !props.disabled) {
      return cssCursorLoading;
    }
  }}
`;
