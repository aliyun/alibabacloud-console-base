import {
  css
} from 'styled-components';

export const DEFAULT_ACCOUNT_AVATAR = '//img.alicdn.com/imgextra/i1/19999999999999/O1CN010pFXIi2NjasoACbpZ_!!19999999999999-2-tps.png';

// 主题黑的时候，在顶栏上的 button 背景色不能是标准的...
export const themeDarkButtonFix = css`
  .theme-dark & {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;
