import styled from 'styled-components';

import {
  mixinBgTertiary,
  mixinBorderTertiaryBottom
} from '@alicloud/console-base-theme';

export default styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  box-sizing: border-box;
  min-height: 36px;
  ${mixinBgTertiary}
  ${mixinBorderTertiaryBottom}
`;