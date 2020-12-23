import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IPropsLoading,
  TAlign
} from '../../types';
import intl from '../../intl';

interface IScPropsLoading {
  align?: TAlign;
}

function getJustifyContent(align?: TAlign): string {
  switch (align) {
    case 'c':
      return 'center';
    case 'r':
      return 'flex-end';
    default:
      return 'flex-start';
  }
}

const cssLoading = css`
  font-size: 12px;
  color: ${COLOR.TEXT_DISABLED};
  color: var(--cb-color-text-disabled, ${COLOR.TEXT_DISABLED});
`;

const ScLoading = styled.div<IScPropsLoading>`
  display: flex;
  align-items: center;
  justify-content: ${props => getJustifyContent(props.align)};
  padding: 20px 8px;
  ${cssLoading};
`;

const ScLoadingInline = styled.span`
  ${cssLoading};
`;

const ScIconWrap = styled.span`
  display: inline-block;
  width: 1.75em;
  font-size: 1.1em;
  text-align: center;
`;

const ScButtonRetry = styled.button`
  padding: 0;
  border: 0;
  background: none;
  font-size: inherit;
  text-align: left;
  color: inherit;
`;

export default function Loading({
  message,
  status,
  align,
  inline,
  retry,
  ...props
}: IPropsLoading): JSX.Element {
  let jsxIcon: JSX.Element;
  let jsxMessage: string | JSX.Element;
  
  switch (status) {
    case 'empty':
      jsxIcon = <Icon type="empty" />;
      jsxMessage = message ?? intl('phrase:empty');
      
      break;
    case 'error':
      jsxIcon = <Icon type="alert" />;
      jsxMessage = message ?? intl(retry ? 'phrase:failed_retry' : 'phrase:failed');
      
      if (retry) {
        jsxMessage = <ScButtonRetry onClick={retry}>{jsxMessage}</ScButtonRetry>;
      }
      
      break;
    default:
      jsxIcon = <Icon type="loading" />;
      jsxMessage = message ?? intl('phrase:loading');
      
      break;
  }
  
  return inline ? <ScLoadingInline {...props}>
    <ScIconWrap>{jsxIcon}</ScIconWrap>
    {jsxMessage}
  </ScLoadingInline> : <ScLoading align={align} {...props}>
    <ScIconWrap>{jsxIcon}</ScIconWrap>
    {jsxMessage}
  </ScLoading>;
}
