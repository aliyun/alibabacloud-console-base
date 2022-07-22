import styled from 'styled-components';

import {
  mixinBorderTransparent
} from '@alicloud/console-base-theme';

export default styled.span`
  display: inline-block;
  padding: 0 1px;
  line-height: 1.2;
  cursor: default;
  font-family: Arial, sans-serif;
  font-size: 0.85em;
  font-weight: 400;
  letter-spacing: 0.5px;
  ${mixinBorderTransparent}
`;