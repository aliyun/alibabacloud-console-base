import React, {
  useCallback
} from 'react';

import {
  IPropsTab
} from '../../../../types';
import {
  useProps,
  useHandleTabClose,
  useHandleTabActivate,
  useActiveTab
} from '../../../../model';
import TabItem from '../../../../rc/tab-item';

interface IProps {
  tab: IPropsTab;
  index: number;
}

export default function NavItem({
  tab,
  index
}: IProps): JSX.Element {
  const {
    classNameForTabItem
  } = useProps();
  const active = useActiveTab() === tab;
  const handleTabActivate = useHandleTabActivate();
  const handleTabClose = useHandleTabClose();
  const handleTabClick = useCallback(() => handleTabActivate(tab.key || index), [tab.key, index, handleTabClose]);
  const handleXClick = useCallback(() => handleTabClose(tab), [tab, handleTabClose]);
  
  return <TabItem {...{
    title: tab.title,
    className: classNameForTabItem,
    active,
    onClick: handleTabClick,
    onClose: tab.closable ? handleXClick : undefined
  }} />;
}
