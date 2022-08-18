import _map from 'lodash/map';
import React, {
} from 'react';
import styled from 'styled-components';

import {
  mixinTextSecondary
} from '@alicloud/console-base-theme';

import toDisplayValue from './to-display-value';

const ScStrong = styled.strong`
  display: inline-block;
  margin-right: 8px;
  min-width: 48px;
  font-weight: 600;
  ${mixinTextSecondary}
`;

export default function renderObject(o: Record<string, unknown>): JSX.Element {
  return <>{_map(o, (v, k) => <div key={k}>
    <ScStrong>{k}</ScStrong>
    <span>{typeof v === 'string' ? v : toDisplayValue(v)}</span>
  </div>)}</>;
}