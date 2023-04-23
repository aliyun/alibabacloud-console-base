import {
  css
} from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';

export const cssHeading = css`
  position: relative;
  margin: 2em 0 0.5em 0;
  line-height: 1.4;
  transition: all 0.3s linear;
  ${mixinTypoEllipsis}
  
  &:first-child {
    margin-top: 0;
  }
`;