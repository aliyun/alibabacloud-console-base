import React, {
  useState,
  useCallback
} from 'react';
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
  display: flex;
  align-items: center;
  padding: 20px 8px;
  text-align: ${props => getTextAlign(props.align)};
  ${cssLoading}
`;

const ScLoadingInline = styled.span`
  display: inline-flex;
  align-items: center;
  ${cssLoading}
`;

const ScIcon = styled(Icon)`
  margin-right: 4px;
  font-size: 1.1em;
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
  const [timesOfRetry, setStateTimesOfRetry] = useState(0);
  const handleRetry = useCallback(() => {
    const times = timesOfRetry + 1;
    
    retry?.(times);
    setStateTimesOfRetry(times);
  }, [retry, timesOfRetry, setStateTimesOfRetry]);
  let jsxIcon: JSX.Element;
  let jsxMessage: string | JSX.Element;
  
  switch (status) {
    case 'empty':
      jsxIcon = <ScIcon type="empty" />;
      jsxMessage = message ?? intl('message:empty');
      
      break;
    case 'error':
      jsxIcon = <ScIcon type="alert-circle" />;
      jsxMessage = message ?? intl(retry ? 'message:failed_retry' : 'message:failed');
      
      if (retry) {
        jsxMessage = <ScButtonRetry onClick={handleRetry}>{jsxMessage}</ScButtonRetry>;
      }
      
      break;
    default:
      jsxIcon = <ScIcon type="loading" />;
      jsxMessage = message ?? intl('message:loading');
      
      break;
  }
  
  return inline ? <ScLoadingInline {...props}>
    {jsxIcon}
    <span>{jsxMessage}</span>
  </ScLoadingInline> : <ScLoading align={align} {...props}>
    {jsxIcon}
    <span>{jsxMessage}</span>
  </ScLoading>;
}
