import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';

import {
  TabsVariant,
  ModelPropsTab,
  useProps,
  useHandleTabActivate
} from '../../../../../../model';
import {
  TAB_PADDING,
  TAB_X_SIZE
} from '../../../../../const';

interface IProps {
  tab: ModelPropsTab;
}

interface IScProps {
  $variant?: TabsVariant;
  $closable?: boolean;
}

const ScTabButton = styled(ButtonBase)<IScProps>`
  padding: 0 ${props => (props.$closable ? TAB_X_SIZE + TAB_PADDING : TAB_PADDING)}px 0 ${TAB_PADDING}px;
  border: 0;
  width: 100%;
  height: 100%;
  ${mixinTypoEllipsis}
`;

export default function TabButton({
  tab
}: IProps): JSX.Element {
  const {
    variant
  } = useProps();
  const handleTabActivate = useHandleTabActivate();
  const handleTabClick = useCallback(() => handleTabActivate(tab), [tab, handleTabActivate]);
  
  return <ScTabButton {...{
    $variant: variant,
    $closable: tab.closable,
    block: true,
    title: typeof tab.title === 'string' ? tab.title : undefined,
    onClick: handleTabClick
  }}>{tab.title}</ScTabButton>;
}
