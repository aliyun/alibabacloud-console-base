import React from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';

const ScSeparator = styled.span`
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
  ${mixinTextTertiary};
  
  &:before {
    content: '/';
  }
`;

export default function Separator(): JSX.Element {
  return <ScSeparator />;
}
