import styled from 'styled-components';

import {
  mixinBgPrimary,
  mixinTextSecondary
} from '@alicloud/console-base-theme';
import {
  FontBase12
} from '@alicloud/console-base-theme-sc-base';

/**
 * 微内容的包裹，一个上下 flex：header + body + footer
 */
export default styled(FontBase12)`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  ${mixinBgPrimary}
  ${mixinTextSecondary}
`;