import React from 'react';
import styled from 'styled-components';

import {
  mixinTypoElementsInline
} from '@alicloud/console-base-theme';

import {
  IHtmlTrustedProps
} from '../types';

const ScHtmlTrusted = styled.span`
  ${mixinTypoElementsInline}
`;

export default function HtmlTrusted({
  text
}: IHtmlTrustedProps): JSX.Element | null {
  if (!text) {
    return null;
  }
  
  if (/</.test(text)) {
    return <ScHtmlTrusted dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
      __html: text
    }} />;
  }
  
  return <span>{text}</span>;
}
