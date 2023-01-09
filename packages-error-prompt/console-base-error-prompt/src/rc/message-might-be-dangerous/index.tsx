import _isString from 'lodash/isString';
import React from 'react';
import styled from 'styled-components';

import {
  mixinTypoElementsInline
} from '@alicloud/console-base-theme';

interface IProps {
  message?: string | JSX.Element;
}

const ScErrorMessage = styled.div`
  margin-top: 8px;
  ${mixinTypoElementsInline}
  
  &:first-child {
    margin-top: 0;
  }
`;

export default function MessageMightBeDangerous({
  message
}: IProps): JSX.Element | null {
  if (!message) {
    return null;
  }
  
  if (_isString(message) && /</.test(message)) {
    return <ScErrorMessage dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
      __html: message
    }} />;
  }
  
  return <ScErrorMessage>{message}</ScErrorMessage>;
}
