export { default } from './rc-container';
export { default as TopNavButton } from './rc/top-nav-button';

// 有场景是使用者希望在 render 之前就直接先加上 body 的 class，输出以减小硬编码耦合
export {
  toggleBodyClass
} from './util';

export type {
  ModelProps as TopNavProps,
  ModelPropsButton as TopNavButtonProps,
  ModelPropsButtonDropdown as TopNavButtonDropdownProps,
  ModelPropsButtonDropdownItem as TopNavButtonDropdownItemProps,
  ModelPropsDock as TopNavDockProps,
  ModelPropsLogo as TopNavLogoProps,
  ModelPropsHelp as TopNavHelpProps,
  ModelPropsLanguage as TopNavLanguageProps,
  ModelPropsLanguageItem as TopNavLanguageItemProps,
  ModelPropsAccount as TopNavAccountProps
} from './model';
