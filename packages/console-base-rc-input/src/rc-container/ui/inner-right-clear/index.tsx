import React from 'react';

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

export default function InnerRightClear(): JSX.Element | null {
  const {
    hasClear
  } = useProps();
  const value = useValue();
  const handleClear = useHandleClear();
  const jsx = hasClear && value ? <ScInputClearButton onClick={handleClear}>
    <Icon type="error-circle-fill" />
  </ScInputClearButton> : null;
  
  return jsx ? <ScInnerRight>{jsx}</ScInnerRight> : null;
}
