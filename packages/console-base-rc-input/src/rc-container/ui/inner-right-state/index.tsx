import React from 'react';
import styled from 'styled-components';

import {
  mixinTextSuccess,
  mixinTextError
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps
} from '../../../model';
import {
  ScInnerRight
} from '../../../sc';

const ScIconSuccess = styled(Icon)`
  ${mixinTextSuccess}
`;
const ScIconError = styled(Icon)`
  ${mixinTextError}
`;

export default function InnerRightState(): JSX.Element | null {
  const {
    state
  } = useProps();
  let jsx: JSX.Element | undefined;
  
  switch (state) {
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
      return null;
  }
  
  return jsx ? <ScInnerRight>{jsx}</ScInnerRight> : null;
}
