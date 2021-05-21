import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextDisabled
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

function getTextAlign(align?: TAlign): string {
  switch (align) {
    case 'c':
      return 'center';
    case 'r':
      return 'right';
    default:
      return 'left';
  }
}

const cssLoading = css`
  font-size: 12px;
  ${mixinTextDisabled}
`;

const ScLoading = styled.div<IScPropsLoading>`
  padding: 20px 8px;
  text-align: ${props => getTextAlign(props.align)};
  ${cssLoading}
`;

const ScLoadingInline = styled.span`
  ${cssLoading}
`;

const ScIconWrap = styled.span`
  display: inline-block;
  width: 2em;
  vertical-align: top;
  text-align: center;
  
  i {
    font-size: 1.1em;
  }
`;

const ScMessageWrap = styled.span`
  display: inline-block;
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
      jsxIcon = <Icon type="alert-circle" />;
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
    <ScMessageWrap>{jsxMessage}</ScMessageWrap>
  </ScLoadingInline> : <ScLoading align={align} {...props}>
    <ScIconWrap>{jsxIcon}</ScIconWrap>
    <ScMessageWrap>{jsxMessage}</ScMessageWrap>
  </ScLoading>;
}
