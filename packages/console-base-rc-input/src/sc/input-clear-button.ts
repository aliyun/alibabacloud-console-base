import styled from 'styled-components';

import {
  mixinButtonReset
} from '@alicloud/console-base-theme';

export default styled.button`
  opacity: 0.6;
  ${mixinButtonReset}
  
  &:hover {
    opacity: 1;
  }
`;
