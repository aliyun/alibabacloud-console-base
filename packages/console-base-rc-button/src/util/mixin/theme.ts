import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinButtonDangerStateNormal,
  mixinButtonMenuStateNormal,
  mixinButtonPrimaryStateNormal,
  mixinButtonSecondaryStateNormal,
  mixinButtonSecondaryAltStateNormal,
  mixinButtonTertiaryStateNormal,
  mixinButtonBrandPrimaryStateNormal,
  mixinButtonBrandSecondaryStateNormal,
  mixinButtonBrandSecondaryAltStateNormal,
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
  mixinButtonSecondaryAltStateActive,
  mixinButtonTertiaryStateActive,
  mixinButtonBrandPrimaryStateActive,
  mixinButtonBrandSecondaryStateActive,
  mixinButtonBrandSecondaryAltStateActive,
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
  mixinButtonSecondaryAltStateDisabled,
  mixinButtonTertiaryStateDisabled,
  mixinButtonBrandPrimaryStateDisabled,
  mixinButtonBrandSecondaryStateDisabled,
  mixinButtonBrandSecondaryAltStateDisabled,
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
  mixinButtonSecondaryAlt,
  mixinButtonTertiary,
  mixinButtonBrandPrimary,
  mixinButtonBrandSecondary,
  mixinButtonBrandSecondaryAlt,
  mixinButtonBrandTertiary,
  mixinButtonTextPrimary,
  mixinButtonTextSecondary,
  mixinButtonTextTertiary,
  mixinButtonTextBrandPrimary,
  mixinButtonTextBrandSecondary
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonTheme
} from '../../const';

const MAPPING_DISABLED: Record<EButtonTheme, FlattenSimpleInterpolation | null> = {
  [EButtonTheme.NONE]: null,
  [EButtonTheme.DANGER]: mixinButtonDangerStateDisabled,
  [EButtonTheme.MENU]: mixinButtonMenuStateDisabled,
  [EButtonTheme.PRIMARY]: mixinButtonPrimaryStateDisabled,
  [EButtonTheme.SECONDARY]: mixinButtonSecondaryStateDisabled,
  [EButtonTheme.SECONDARY_ALT]: mixinButtonSecondaryAltStateDisabled,
  [EButtonTheme.TERTIARY]: mixinButtonTertiaryStateDisabled,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimaryStateDisabled,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondaryStateDisabled,
  [EButtonTheme.BRAND_SECONDARY_ALT]: mixinButtonBrandSecondaryAltStateDisabled,
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
  [EButtonTheme.SECONDARY_ALT]: mixinButtonSecondaryAltStateNormal,
  [EButtonTheme.TERTIARY]: mixinButtonTertiaryStateNormal,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimaryStateNormal,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondaryStateNormal,
  [EButtonTheme.BRAND_SECONDARY_ALT]: mixinButtonBrandSecondaryAltStateNormal,
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
  [EButtonTheme.SECONDARY_ALT]: mixinButtonSecondaryAltStateActive,
  [EButtonTheme.TERTIARY]: mixinButtonTertiaryStateActive,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimaryStateActive,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondaryStateActive,
  [EButtonTheme.BRAND_SECONDARY_ALT]: mixinButtonBrandSecondaryAltStateActive,
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
  [EButtonTheme.SECONDARY_ALT]: mixinButtonSecondaryAlt,
  [EButtonTheme.TERTIARY]: mixinButtonTertiary,
  [EButtonTheme.BRAND_PRIMARY]: mixinButtonBrandPrimary,
  [EButtonTheme.BRAND_SECONDARY]: mixinButtonBrandSecondary,
  [EButtonTheme.BRAND_SECONDARY_ALT]: mixinButtonBrandSecondaryAlt,
  [EButtonTheme.BRAND_TERTIARY]: mixinButtonBrandTertiary,
  [EButtonTheme.TEXT_PRIMARY]: mixinButtonTextPrimary,
  [EButtonTheme.TEXT_SECONDARY]: mixinButtonTextSecondary,
  [EButtonTheme.TEXT_TERTIARY]: mixinButtonTextTertiary,
  [EButtonTheme.TEXT_BRAND_PRIMARY]: mixinButtonTextBrandPrimary,
  [EButtonTheme.TEXT_BRAND_SECONDARY]: mixinButtonTextBrandSecondary
};

function getThemeMixin(props: IButtonPropsForSc): FlattenSimpleInterpolation | null {
  if (props.disabled) {
    return (props.theme ? MAPPING_DISABLED[props.theme] : null) || mixinButtonTextTertiaryStateDisabled;
  }
  
  if (props.active) {
    return props.theme ? MAPPING_ACTIVE[props.theme] : null;
  }
  
  if (props.loading) { // loading 的时候没有 hover 样式
    return props.theme ? MAPPING_NORMAL[props.theme] : null;
  }
  
  return props.theme ? MAPPING[props.theme] : null;
}

export default css<IButtonPropsForSc>`
  ${getThemeMixin}
`;
