import {
  css
} from 'styled-components';

export * from './var';
export * from './mixin';

export { default as ThemeStyleLight } from './global-style-theme-light';
export { default as ThemeStyleDark } from './global-style-theme-dark';
export { default as GlobalStyleFontFamilyForJa } from './global-style-font-family-for-ja';
export {
  toggleBodyClass
} from './util';

// 主题黑的时候，在顶栏上的 button 背景色不能是标准的... FIXME 我需要调整颜色的策略 primary-secondary-tertiary 区分 container 和 control
export const mixinTopNavButtonDarkFix = css`
  .theme-dark & {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export type {
  IPropsEllipsisLines as EllipsisLinesProps
} from './types';
