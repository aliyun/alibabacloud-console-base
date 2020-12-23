import React from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';

const ScSeparator = styled.span`
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
  color: ${COLOR.LINE_BORDER};
  color: var(--cb-color-line-border, ${COLOR.LINE_BORDER});
  
  &:before {
    content: '/';
  }
`;

export default function Separator(): JSX.Element {
  return <ScSeparator />;
}
