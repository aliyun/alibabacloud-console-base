import React from 'react';

import {
  usePageList
} from '../../../../model';

import PageButton from './page-button';
import PageEllipsis from './page-ellipsis';

export default function PageList(): JSX.Element {
  const pageList = usePageList();
  
  return <div>
    {pageList.map((v, i) => {
      if (typeof v === 'number') {
        return <PageButton key={`page-${v}`} n={v} />;
      }
      
      return <PageEllipsis key={`ellipsis-${i}`} />; // eslint-disable-line react/no-array-index-key
    })}
  </div>;
}
