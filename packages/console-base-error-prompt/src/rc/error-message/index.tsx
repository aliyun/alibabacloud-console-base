import _isString from 'lodash/isString';
import React from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-styled-mixin';

import {
  IErrorQueueItem
} from '../../types';

interface IProps {
  queueItem: IErrorQueueItem;
}

const ScErrorMessage = styled.div`
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

function getJsxMessage(message: string | JSX.Element, code: string): string | JSX.Element {
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

export default function ErrorMessage({
  queueItem: {
    message,
    error
  }
}: IProps): JSX.Element {
  return <ScErrorMessage>{getJsxMessage(message || error.message, error.code)}</ScErrorMessage>;
}
