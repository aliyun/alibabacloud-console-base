import _isString from 'lodash/isString';
import React, {
  isValidElement
} from 'react';
import styled from 'styled-components';

import {
  mixinTypoEm,
  mixinTypoCode
} from '@alicloud/console-base-theme';

import {
  IErrorQueueItem
} from '../../types';

interface IProps {
  queueItem: IErrorQueueItem;
}

const ScErrorMessage = styled.div`
  em {
    ${mixinTypoEm}
  }
  
  code {
    ${mixinTypoCode}
  }
`;

export default function ErrorMessage({
  queueItem: {
    message,
    error
  }
}: IProps): JSX.Element {
  const theMessage = message || error.code || 'n / a';
  
  if (_isString(theMessage) && /</.test(theMessage)) {
    return <ScErrorMessage>
      <span dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: theMessage
      }} />
    </ScErrorMessage>;
  }
  
  return isValidElement(theMessage) ? theMessage : <>{theMessage.toString()}</>;
}
