import {
  IModelProps,
  EButtonTheme,
  EButtonSize
} from '../model';

const THEMES_NEED_BORDER: EButtonTheme[] = [
  EButtonTheme.DANGER,
  EButtonTheme.PRIMARY,
  EButtonTheme.SECONDARY,
  EButtonTheme.SECONDARY_ALT,
  EButtonTheme.TERTIARY,
  EButtonTheme.TERTIARY_ALT,
  EButtonTheme.BRAND_PRIMARY,
  EButtonTheme.BRAND_SECONDARY,
  EButtonTheme.BRAND_SECONDARY_ALT,
  EButtonTheme.BRAND_TERTIARY
];

export default function isBorderless(props: Partial<IModelProps>): boolean {
  return props.size === EButtonSize.NONE || (props.theme ? !THEMES_NEED_BORDER.includes(props.theme) : true);
}