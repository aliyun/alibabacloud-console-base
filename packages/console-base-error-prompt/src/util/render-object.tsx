import _map from 'lodash/map';
import React, {
} from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary
} from '@alicloud/console-base-theme';

import toDisplayValue from './to-display-value';

const ScStrong = styled.strong`
  font-weight: 600;
  ${mixinTextPrimary}
  
  &:after {
    content: ' = ';
  }
`;

export default function renderObject(o: Record<string, unknown>): JSX.Element {
  return <>{_map(o, (v, k) => <div key={k}>
    <ScStrong>{k}</ScStrong>
    <span>{toDisplayValue(v)}</span>
  </div>)}</>;
}