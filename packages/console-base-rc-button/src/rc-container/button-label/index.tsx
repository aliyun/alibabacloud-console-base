import React from 'react';
import styled from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';

import {
  usePropsCustom,
  usePropsDom
} from '../../model';

const ScLabel = styled.span`
  flex: 1;
  ${mixinTypoEllipsis}
`;

export default function ButtonLabel(): JSX.Element | null {
  const {
    label
  } = usePropsCustom();
  const {
    children
  } = usePropsDom();
  const jsxInner = label || children; // label prior to children
  
  return jsxInner ? <ScLabel>{jsxInner}</ScLabel> : null;
}
