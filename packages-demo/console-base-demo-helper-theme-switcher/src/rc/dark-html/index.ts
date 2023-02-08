import {
  createGlobalStyle
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinTextPrimary
} from '@alicloud/console-base-theme';

export default createGlobalStyle`
  html {
    ${mixinBgPrimary}
    ${mixinTextPrimary}
  }
`;