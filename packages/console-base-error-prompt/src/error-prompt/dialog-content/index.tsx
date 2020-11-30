import _isString from 'lodash/isString';
import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-styled-mixin';
import Pagination from '@alicloud/console-base-rc-pagination';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorDetailedInfo,
  IErrorQueueItem,
  IErrorDialogData
} from '../../types';

import ErrorDetails from './error-details';

interface IProps {
  queue: IErrorQueueItem[];
}

const ScMessage = styled.div`
  margin-bottom: 32px;
  font-size: 14px;
  
  em {
    font-style: normal;
    color: ${COLOR.TEXT_EMPHASIS};
  }
  
  code {
    padding: 0 4px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.04);
    color: #f25c7f;
  }
`;

const ScPagination = styled(Pagination)`
  margin-top: 1.2em;
`;

function getJsxMessage({
  message,
  code
}: IErrorDetailedInfo): string | JSX.Element {
  if (!message) {
    return code || 'n / a';
  }
  
  if (_isString(message)) {
    return <span dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
      __html: message
    }} />;
  }
  
  return message;
}

export default function DialogContent({
  queue
}: IProps): JSX.Element {
  const {
    data,
    updateData
  } = useDialog<void, IErrorDialogData>();
  const queueItem = queue[data.page - 1];
  const {
    error
  } = queueItem;
  
  const handlePage = useCallback((page: number) => updateData({
    page
  }), [updateData]);
  
  return <>
    <ScMessage>{getJsxMessage(error)}</ScMessage>
    <ErrorDetails details={error} />
    <ScPagination {...{
      total: queue.length,
      page: data.page,
      pageSize: 1,
      theme: 'simplest',
      onChange: handlePage
    }} />
  </>;
}
