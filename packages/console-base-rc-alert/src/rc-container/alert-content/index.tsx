import React from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary
} from '@alicloud/console-base-theme';

import {
  useProps
} from '../../model';

const ScAlertTitle = styled.div`
  margin-bottom: 4px;
  font-weight: 600;
  ${mixinTextPrimary}
`;

export default function AlertContent(): JSX.Element {
  const [{
    title,
    message
  }] = useProps();
  
  return <div>
    {title ? <ScAlertTitle>{title}</ScAlertTitle> : null}
    {message}
  </div>;
}