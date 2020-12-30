import React from 'react';
import styled from 'styled-components';

import Button, {
  ButtonSize,
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import hasNoActionPoint from '../../../util/has-no-action-point';
import {
  useProps
} from '../../../model';

const ScDock = styled(Button)`
  width: 50px;
  height: 50px;
  line-height: 50px;
`;

const ScIcon = styled(Icon)`
  font-size: 18px;
`;

/**
 * 程序坞
 */
export default function Dock(): JSX.Element | null {
  const {
    dock
  } = useProps();
  
  return hasNoActionPoint(dock) ? null : <ScDock {...{
    spm: 'dock',
    label: <ScIcon type="menu" />,
    size: ButtonSize.NONE,
    theme: ButtonTheme.BRAND_PRIMARY,
    ...dock
  }} />;
}
