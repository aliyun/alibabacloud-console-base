import React from 'react';
import styled from 'styled-components';

import {
  mixinTextSuccess,
  mixinTextError
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps,
  useValue,
  useHandleClear
} from '../../../model';
import {
  ScInnerRight,
  ScInputClearButton
} from '../../../sc';

const ScIconSuccess = styled(Icon)`
  ${mixinTextSuccess}
`;
const ScIconError = styled(Icon)`
  ${mixinTextError}
`;

export default function InnerRightStatus(): JSX.Element | null {
  const {
    status,
    hasClear
  } = useProps();
  const value = useValue();
  const handleClear = useHandleClear();
  let jsx: JSX.Element | undefined;
  
  if (!value) {
    return null;
  }
  
  switch (status) {
    case 'loading':
      jsx = <Icon type="loading" />;
      
      break;
    case 'success':
      jsx = <ScIconSuccess type="success-circle" />;
      
      break;
    case 'error':
      jsx = <ScIconError type="error-circle" />;
      
      break;
    default:
      if (hasClear) {
        jsx = <ScInputClearButton onClick={handleClear}>
          <Icon type="error-circle-fill" />
        </ScInputClearButton>;
      }
      
      break;
  }
  
  return jsx ? <ScInnerRight>{jsx}</ScInnerRight> : null;
}
