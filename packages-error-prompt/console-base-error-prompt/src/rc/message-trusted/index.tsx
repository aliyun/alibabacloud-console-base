import React from 'react';
import styled from 'styled-components';

import {
  mixinTypoElementsList
} from '@alicloud/console-base-theme';
import HtmlTrusted from '@alicloud/console-base-rc-html-trusted';

interface IProps {
  message?: string | JSX.Element;
}

const ScErrorMessage = styled.div`
  margin-top: 8px;
  ${mixinTypoElementsList}
  
  &:first-child {
    margin-top: 0;
  }
  
  p {
    margin: 8px 0;
    font-size: inherit;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function MessageTrusted({
  message
}: IProps): JSX.Element | null {
  if (!message) {
    return null;
  }
  
  return <ScErrorMessage>
    {typeof message === 'string' ? <HtmlTrusted {...{
      text: message
    }} /> : message}
  </ScErrorMessage>;
}
