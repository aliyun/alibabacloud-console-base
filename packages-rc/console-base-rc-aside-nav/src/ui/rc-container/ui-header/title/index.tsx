import React from 'react';
import styled from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';

import {
  useProps
} from '../../../../model';

const ScTitle = styled.div`
  flex: 1;
  ${mixinTypoEllipsis}
`;

export default function Title(): JSX.Element {
  const {
    title
  } = useProps();
  
  return <ScTitle title={typeof title === 'string' ? title : undefined}>{title}</ScTitle>;
}
