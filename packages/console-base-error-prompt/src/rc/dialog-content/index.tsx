import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Pagination from '@alicloud/console-base-rc-pagination';
import {
  AltWrap,
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorQueueItem,
  IErrorDialogData
} from '../../types';
import ErrorMessage from '../error-message';
import ErrorDetails from '../error-details';

interface IProps {
  queue: IErrorQueueItem[];
}

const ScPagination = styled(Pagination)`
  margin-top: 8px;
`;

export default function DialogContent({
  queue
}: IProps): JSX.Element {
  const {
    data,
    updateData
  } = useDialog<void, IErrorDialogData>();
  const handlePage = useCallback((page: number) => updateData({
    page
  }), [updateData]);
  const queueItem: IErrorQueueItem = queue[data.page - 1];
  
  return <AltWrap {...{
    type: 'error',
    title: queueItem.title,
    content: <>
      <ErrorMessage queueItem={queueItem} />
      <ErrorDetails queueItem={queueItem} />
      <ScPagination {...{
        total: queue.length,
        page: data.page,
        pageSize: 1,
        theme: 'simplest',
        onChange: handlePage
      }} />
    </>
  }} />;
}
