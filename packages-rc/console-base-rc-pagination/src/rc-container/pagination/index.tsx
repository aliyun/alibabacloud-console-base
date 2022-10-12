import React from 'react';
import styled from 'styled-components';

import {
  ModelProps,
  useProps,
  usePropsOnDom,
  useRefUi
} from '../../model';
import {
  getStyleValueJustify
} from '../../util';

import ButtonPrevNext from './button-prev-next';
import Paging from './paging';

interface IPropsScPagination {
  align?: ModelProps['align'];
}

const ScPagination = styled.div<IPropsScPagination>`
  display: flex;
  align-items: center;
  justify-content: ${props => getStyleValueJustify(props.align)};
`;

export default function Pagination(): JSX.Element {
  const {
    align
  } = useProps();
  const props = usePropsOnDom();
  const refUi = useRefUi();
  
  return <ScPagination {...props} align={align} ref={refUi}>
    <ButtonPrevNext prev />
    <Paging />
    <ButtonPrevNext />
  </ScPagination>;
}
