import styled from 'styled-components';

import {
  mixinTypoFontBase
} from '../mixin';

/**
 * @deprecated 使用 @alicloud/console-base-theme-sc-base
 */
export const FontBase = styled.div`
  ${mixinTypoFontBase}
`;

/**
 * @deprecated 使用 @alicloud/console-base-theme-sc-base
 */
export const FontBase12 = styled(FontBase)`
  font-size: 12px;
`;

/**
 * @deprecated 使用 @alicloud/console-base-theme-sc-base
 */
export const FontBase14 = styled(FontBase)`
  font-size: 14px;
`;
