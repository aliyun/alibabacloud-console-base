import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinButtonDangerStateNormal,
  mixinButtonMenuStateNormal,
  mixinButtonMenuActiveStateNormal,
  mixinButtonPrimaryStateNormal,
  mixinButtonSecondaryStateNormal,
  mixinButtonTertiaryStateNormal,
  mixinButtonBrandPrimaryStateNormal,
  mixinButtonBrandSecondaryStateNormal,
  mixinButtonBrandTertiaryStateNormal,
  mixinButtonTextPrimaryStateNormal,
  mixinButtonTextSecondaryStateNormal,
  mixinButtonTextTertiaryStateNormal,
  mixinButtonTextBrandPrimaryStateNormal,
  mixinButtonTextBrandSecondaryStateNormal,
  mixinButtonDanger,
  mixinButtonMenu,
  mixinButtonMenuActive,
  mixinButtonPrimary,
  mixinButtonSecondary,
  mixinButtonTertiary,
  mixinButtonBrandPrimary,
  mixinButtonBrandSecondary,
  mixinButtonBrandTertiary,
  mixinButtonTextPrimary,
  mixinButtonTextSecondary,
  mixinButtonTextTertiary,
  mixinButtonTextBrandPrimary,
  mixinButtonTextBrandSecondary
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
  [EButtonTheme.MENU]: mixinButtonMenuStateNormal,
  [EButtonTheme.MENU_ACTIVE]: mixinButtonMenuActiveStateNormal,
  [EButtonTheme.PRIMARY]: mixinButtonPrimaryStateNormal,
  [EButtonTheme.SECONDARY]: mixinButtonSecondaryStateNormal,
  [EButtonTheme.TERTIARY]: mixinButtonTertiaryStateNormal,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimaryStateNormal,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondaryStateNormal,
  [EButtonTheme.BRAND_TERTIARY]: mixinButtonBrandTertiaryStateNormal,
  [EButtonTheme.TEXT_PRIMARY]: mixinButtonTextPrimaryStateNormal,
  [EButtonTheme.TEXT_SECONDARY]: mixinButtonTextSecondaryStateNormal,
  [EButtonTheme.TEXT_TERTIARY]: mixinButtonTextTertiaryStateNormal,
  [EButtonTheme.TEXT_BRAND_PRIMARY]: mixinButtonTextBrandPrimaryStateNormal,
  [EButtonTheme.TEXT_BRAND_SECONDARY]: mixinButtonTextBrandSecondaryStateNormal
};

const MAPPING: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDanger,
  [EButtonTheme.MENU]: mixinButtonMenu,
  [EButtonTheme.MENU_ACTIVE]: mixinButtonMenuActive,
  [EButtonTheme.PRIMARY]: mixinButtonPrimary,
  [EButtonTheme.SECONDARY]: mixinButtonSecondary,
  [EButtonTheme.TERTIARY]: mixinButtonTertiary,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimary,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondary,
  [EButtonTheme.BRAND_TERTIARY]: mixinButtonBrandTertiary,
  [EButtonTheme.TEXT_PRIMARY]: mixinButtonTextPrimary,
  [EButtonTheme.TEXT_SECONDARY]: mixinButtonTextSecondary,
  [EButtonTheme.TEXT_TERTIARY]: mixinButtonTextTertiary,
  [EButtonTheme.TEXT_BRAND_PRIMARY]: mixinButtonTextBrandPrimary,
  [EButtonTheme.TEXT_BRAND_SECONDARY]: mixinButtonTextBrandSecondary
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
