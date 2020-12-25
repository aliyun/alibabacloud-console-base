import _isString from 'lodash/isString';
import React from 'react';
import styled from 'styled-components';

import {
  typo
} from '@alicloud/console-base-theme';

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
    ${typo.tagEm};
  }
  
  code {
    ${typo.tagCode};
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
