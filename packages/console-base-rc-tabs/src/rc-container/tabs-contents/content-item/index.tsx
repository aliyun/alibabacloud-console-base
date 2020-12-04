import React from 'react';
import styled from 'styled-components';

import {
  IPropsTab
} from '../../../types';
import {
  useActiveTab
} from '../../../model';

interface IProps {
  tab: IPropsTab;
}

interface IScPropsNavItem {
  active: boolean;
  padding: IPropsTab['contentPadding'];
}

const ScContentItem = styled.div<IScPropsNavItem>`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: ${props => (props.padding === 'normal' ? '16px' : 0)};
  height: 100%;
`;

export default function ContentItem({
  tab
}: IProps): JSX.Element {
  const activeTab = useActiveTab();
  const active = activeTab === tab;
  const {
    content,
    contentPadding
  } = tab;
  
  return <ScContentItem {...{
    active,
    padding: contentPadding
  }}>
    {content}
  </ScContentItem>;
}
