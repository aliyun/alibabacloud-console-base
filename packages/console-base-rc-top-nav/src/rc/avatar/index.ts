import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';

export default styled.img`
  display: inline-block;
  border-radius: 50%;
  background-color: ${COLOR.FILL_LIGHT_FADE};
  background-color: var(--cb-color-fill-light-fade, ${COLOR.FILL_LIGHT_FADE});
  width: 28px;
  height: 28px;
  vertical-align: middle;
`;
