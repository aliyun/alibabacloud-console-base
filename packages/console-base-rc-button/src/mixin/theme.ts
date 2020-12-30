import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinButtonDangerStateNormal,
  mixinButtonMenuStateNormal,
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
  mixinButtonDangerStateActive,
  mixinButtonMenuStateActive,
  mixinButtonPrimaryStateActive,
  mixinButtonSecondaryStateActive,
  mixinButtonTertiaryStateActive,
  mixinButtonBrandPrimaryStateActive,
  mixinButtonBrandSecondaryStateActive,
  mixinButtonBrandTertiaryStateActive,
  mixinButtonTextPrimaryStateActive,
  mixinButtonTextSecondaryStateActive,
  mixinButtonTextTertiaryStateActive,
  mixinButtonTextBrandPrimaryStateActive,
  mixinButtonTextBrandSecondaryStateActive,
  mixinButtonDangerStateDisabled,
  mixinButtonMenuStateDisabled,
  mixinButtonPrimaryStateDisabled,
  mixinButtonSecondaryStateDisabled,
  mixinButtonTertiaryStateDisabled,
  mixinButtonBrandPrimaryStateDisabled,
  mixinButtonBrandSecondaryStateDisabled,
  mixinButtonBrandTertiaryStateDisabled,
  mixinButtonTextPrimaryStateDisabled,
  mixinButtonTextSecondaryStateDisabled,
  mixinButtonTextTertiaryStateDisabled,
  mixinButtonTextBrandPrimaryStateDisabled,
  mixinButtonTextBrandSecondaryStateDisabled,
  mixinButtonDanger,
  mixinButtonMenu,
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

const MAPPING_DISABLED: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDangerStateDisabled,
  [EButtonTheme.MENU]: mixinButtonMenuStateDisabled,
  [EButtonTheme.PRIMARY]: mixinButtonPrimaryStateDisabled,
  [EButtonTheme.SECONDARY]: mixinButtonSecondaryStateDisabled,
  [EButtonTheme.TERTIARY]: mixinButtonTertiaryStateDisabled,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimaryStateDisabled,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondaryStateDisabled,
  [EButtonTheme.BRAND_TERTIARY]: mixinButtonBrandTertiaryStateDisabled,
  [EButtonTheme.TEXT_PRIMARY]: mixinButtonTextPrimaryStateDisabled,
  [EButtonTheme.TEXT_SECONDARY]: mixinButtonTextSecondaryStateDisabled,
  [EButtonTheme.TEXT_TERTIARY]: mixinButtonTextTertiaryStateDisabled,
  [EButtonTheme.TEXT_BRAND_PRIMARY]: mixinButtonTextBrandPrimaryStateDisabled,
  [EButtonTheme.TEXT_BRAND_SECONDARY]: mixinButtonTextBrandSecondaryStateDisabled
};

const MAPPING_NORMAL: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDangerStateNormal,
  [EButtonTheme.MENU]: mixinButtonMenuStateNormal,
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

const MAPPING_ACTIVE: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDangerStateActive,
  [EButtonTheme.MENU]: mixinButtonMenuStateActive,
  [EButtonTheme.PRIMARY]: mixinButtonPrimaryStateActive,
  [EButtonTheme.SECONDARY]: mixinButtonSecondaryStateActive,
  [EButtonTheme.TERTIARY]: mixinButtonTertiaryStateActive,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimaryStateActive,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondaryStateActive,
  [EButtonTheme.BRAND_TERTIARY]: mixinButtonBrandTertiaryStateActive,
  [EButtonTheme.TEXT_PRIMARY]: mixinButtonTextPrimaryStateActive,
  [EButtonTheme.TEXT_SECONDARY]: mixinButtonTextSecondaryStateActive,
  [EButtonTheme.TEXT_TERTIARY]: mixinButtonTextTertiaryStateActive,
  [EButtonTheme.TEXT_BRAND_PRIMARY]: mixinButtonTextBrandPrimaryStateActive,
  [EButtonTheme.TEXT_BRAND_SECONDARY]: mixinButtonTextBrandSecondaryStateActive
};

const MAPPING: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDanger,
  [EButtonTheme.MENU]: mixinButtonMenu,
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

export default css<IButtonPropsForSc>`
  ${props => { // loading 的时候没有 hover 样式
    if (props.disabled) {
      return MAPPING_DISABLED[props.theme] || mixinButtonTextTertiaryStateDisabled;
    }
    
    if (props.active) {
      return MAPPING_ACTIVE[props.theme];
    }
    
    if (props.loading) {
      return MAPPING_NORMAL[props.theme];
    }
    
    return MAPPING[props.theme];
  }}
`;
