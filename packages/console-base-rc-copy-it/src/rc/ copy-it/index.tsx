import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';
import {
  CSSTransition
} from 'react-transition-group';

import copyText from '@alicloud/copy-text';
import {
  mixinTextDisabled
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  IProps
} from '../../types';
import intl from '../../intl';

const ScCopyIt = styled.span`
  button {
    i {
      margin-right: 4px;
    }
  }
`;

const ScLabel = styled.span`
  margin-right: 8px;
`;

const ScButton = styled(Button)`
  margin-right: 2px;
  vertical-align: baseline;
`;

const ScCopied = styled.span`
  font-size: 0.9em;
  ${mixinTextDisabled}
  
  &.enter {
    opacity: 0;
  }
  
  &.enter-active {
    opacity: 1;
    transition: opacity ease-in-out 200ms;
  }
  
  &.exit {
    opacity: 1;
  }
  
  &.exit-active {
    opacity: 0;
    transition: opacity ease-in-out 200ms;
  }
`;

export default function CopyIt({
  text,
  label
}: IProps): JSX.Element {
  const [stateCopiedTimestamp, setStateCopiedTimestamp] = useState<number>(0);
  
  const handleCopy = useCallback(() => {
    const copied = copyText(text);
    
    if (!copied) {
      return;
    }
    
    setStateCopiedTimestamp(Date.now());
  }, [text, setStateCopiedTimestamp]);
  
  useEffect(() => {
    if (stateCopiedTimestamp) {
      const timer = window.setTimeout(() => setStateCopiedTimestamp(0), 5000);
      
      return () => window.clearTimeout(timer);
    }
  }, [stateCopiedTimestamp]);
  
  return <ScCopyIt>
    <ScLabel>{label || text}</ScLabel>
    <ScButton {...{
      label: <Icon type="copy" />,
      title: intl('op:copy'),
      theme: ButtonTheme.TEXT_TERTIARY,
      onClick: handleCopy
    }} />
    <CSSTransition {...{
      in: stateCopiedTimestamp > 0,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 200
    }}>
      <ScCopied>{intl('status:copied')}</ScCopied>
    </CSSTransition>
  </ScCopyIt>;
}
