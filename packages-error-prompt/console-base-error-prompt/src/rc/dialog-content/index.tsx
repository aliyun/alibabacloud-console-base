import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Pagination from '@alicloud/console-base-rc-pagination';
import ErrorInfo from '@alicloud/console-base-rc-error-info';
import {
  AltWrap,
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorQueueItem,
  IErrorDialogData
} from '../../types';
import {
  DETAILED_MODE
} from '../../const';
import MessageTrusted from '../message-trusted';

interface IProps {
  queue: IErrorQueueItem[];
}

const ScErrorInfo = styled(ErrorInfo)`
  margin-top: 12px;
  font-size: 12px;
`;

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
  const {
    title,
    error,
    messageExtra,
    detailedMode = DETAILED_MODE
  } = queue[data.page - 1]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  
  return <AltWrap {...{
    type: 'error',
    title,
    content: <>
      <MessageTrusted message={error.message || error.code || 'n / a'} />
      <MessageTrusted message={messageExtra} />
      <ScErrorInfo {...{
        foldable: true,
        error,
        detailedMode
      }} />
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
