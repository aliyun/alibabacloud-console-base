import React from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-styled-mixin';

const ScSeparator = styled.span`
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
  color: ${COLOR.TEXT_CAPTION};
  
  &:before {
    content: '/';
  }
`;

export default function Separator(): JSX.Element {
  return <ScSeparator />;
}
