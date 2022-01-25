import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import intl from '../../../../../intl';
import ControlButton from '../../../../../rc/control-button';
import {
  ModelPropsTab,
  useHandleTabClose
} from '../../../../../model';

interface IProps {
  tab: ModelPropsTab;
}

const ScTabX = styled(ControlButton)`
  position: absolute;
  top: 8px;
  right: 6px;
`;

export default function TabX({
  tab
}: IProps): JSX.Element | null {
  const handleTabClose = useHandleTabClose();
  const handleXClick = useCallback(() => handleTabClose(tab), [tab, handleTabClose]);
  
  return tab.closable ? <ScTabX {...{
    spm: 'x',
    title: intl('op:close'),
    label: <Icon type="x" />,
    onClick: handleXClick
  }} /> : null;
}
