import React from 'react';
import styled from 'styled-components';

import {
  usePageList
} from '../../../../model';

import PageButton from './page-button';
import PageEllipsis from './page-ellipsis';

const ScPageList = styled.div`
  display: flex;
  align-items: center;
`;

export default function PageList(): JSX.Element {
  const pageList = usePageList();
  
  return <ScPageList>
    {pageList.map((v, i) => {
      if (typeof v === 'number') {
        return <PageButton key={`page-${v}`} n={v} />;
      }
      
      return <PageEllipsis key={`ellipsis-${i}`} />; // eslint-disable-line react/no-array-index-key
    })}
  </ScPageList>;
}
