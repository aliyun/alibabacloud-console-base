import React, {
  Children,
  forwardRef
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTypoElementsInline
} from '@alicloud/console-base-theme';

import {
  IListProps,
  TListRef
} from '../../types';

const cssList = css`
  padding-left: 2em;
  ${mixinTypoElementsInline}
`;

const ScUl = styled.ul`
  list-style: disc outside;
  ${cssList}
`;

const ScOl = styled.ol`
  list-style: decimal outside;
  ${cssList}
`;

const ScLi = styled.li`
  margin: 4px 0;
`;

function List({
  ordered,
  children,
  ...props
}: IListProps, ref: TListRef): JSX.Element {
  const ListComponent = ordered ? ScOl : ScUl;
  
  return <ListComponent ref={ref} {...props}>
    {Children.map(children, (v, i): JSX.Element | null => <ScLi key={i}>{v as JSX.Element}</ScLi>)}
  </ListComponent>;
}

export default forwardRef(List);
