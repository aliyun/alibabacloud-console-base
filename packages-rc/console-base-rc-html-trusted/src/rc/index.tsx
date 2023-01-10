import React from 'react';
import styled from 'styled-components';

import {
  mixinTypoElementsInline
} from '@alicloud/console-base-theme';

import {
  IHtmlTrustedProps
} from '../types';

const ScSpan = styled.span`
  ${mixinTypoElementsInline}
`;

export default function Intl({
  text
}: IHtmlTrustedProps): JSX.Element | null {
  if (!text) {
    return null;
  }
  
  if (/</.test(text)) {
    return <ScSpan dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
      __html: text
    }} />;
  }
  
  return <span>{text}</span>;
}
