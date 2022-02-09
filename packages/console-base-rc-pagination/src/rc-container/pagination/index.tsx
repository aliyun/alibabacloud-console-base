import React from 'react';
import styled from 'styled-components';

import {
  ModelProps,
  usePropsOnDom
} from '../../model';
import {
  getStyleValueJustify
} from '../../util';

import ButtonPrev from './button-prev';
import ButtonNext from './button-next';
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
  const props = usePropsOnDom();
  
  return <ScPagination {...props}>
    <ButtonPrev />
    <Paging />
    <ButtonNext />
  </ScPagination>;
}
