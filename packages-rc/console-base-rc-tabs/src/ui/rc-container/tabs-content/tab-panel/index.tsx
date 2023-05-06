import React from 'react';
import styled from 'styled-components';

import {
  ModelPropsTab,
  TabContentPadding,
  useProps,
  useActiveTab
} from '../../../../model';
import {
  getContentPadding
} from '../../../util';

interface IProps {
  tab: ModelPropsTab;
}

interface IScPropsNavItem {
  active: boolean;
  padding: TabContentPadding;
}

const ScTabPanel = styled.div<IScPropsNavItem>`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: ${props => getContentPadding(props.padding)};
  box-sizing: border-box;
  height: 100%;
`;

export default function TabPanel({
  tab
}: IProps): JSX.Element {
  const {
    contentPadding: contentPaddingInProps
  } = useProps();
  const active = useActiveTab() === tab;
  const {
    content,
    contentPadding = contentPaddingInProps,
    contentAttr
  } = tab;
  
  return <ScTabPanel {...{
    active,
    padding: contentPadding,
    role: 'tabpanel',
    ...contentAttr
  }}>
    {content}
  </ScTabPanel>;
}
