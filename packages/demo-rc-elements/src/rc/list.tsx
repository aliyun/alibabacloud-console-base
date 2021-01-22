/* eslint-disable react/no-array-index-key */
import React, {
  ReactChild,
  Ref,
  Children,
  forwardRef
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  IPropsList
} from '../types';
import {
  CSS_BLOCK_LEVEL_ELEMENT
} from '../const';

const cssList = css`
  padding-left: 3em;
  ${CSS_BLOCK_LEVEL_ELEMENT}
`;

const ScUl = styled.ul`
  list-style: square;
  ${cssList}
`;

const ScOl = styled.ol`
  list-style: lower-roman;
  ${cssList}
`;

const ScLi = styled.li`
  margin: 4px 0;
`;

function List({
  ordered,
  children,
  ...props
}: IPropsList, ref: Ref<HTMLOListElement & HTMLUListElement>): JSX.Element {
  const ListComponent = ordered ? ScOl : ScUl;
  
  return <ListComponent ref={ref} {...props}>
    {Children.map(children, (v: ReactChild, i): JSX.Element | null => <ScLi key={i}>{v}</ScLi>)}
  </ListComponent>;
}

export default forwardRef(List);
