import styled from 'styled-components';

import {
  mixinBgSecondary
} from '@alicloud/console-base-theme';

export default styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  vertical-align: middle;
  ${mixinBgSecondary};
`;
