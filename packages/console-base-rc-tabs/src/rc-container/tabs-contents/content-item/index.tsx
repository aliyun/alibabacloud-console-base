import React from 'react';
import styled from 'styled-components';

import {
  TContentPadding,
  IPropsTab
} from '../../../types';
import {
  useProps,
  useActiveTab
} from '../../../model';

interface IProps {
  tab: IPropsTab;
}

interface IScPropsNavItem {
  active: boolean;
  padding: TContentPadding;
}

function getContentPadding(contentPadding: TContentPadding): string {
  switch (contentPadding) {
    case 'top':
      return '12px 0 0 0';
    case 'around':
      return '12px';
    default:
      return '0';
  }
}

const ScContentItem = styled.div<IScPropsNavItem>`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: ${props => (getContentPadding(props.padding))};
  height: 100%;
`;

export default function ContentItem({
  tab
}: IProps): JSX.Element {
  const {
    contentPadding: contentPaddingInProps
  } = useProps();
  const activeTab = useActiveTab();
  const active = activeTab === tab;
  const {
    content,
    contentPadding = contentPaddingInProps
  } = tab;
  
  return <ScContentItem {...{
    active,
    padding: contentPadding
  }}>
    {content}
  </ScContentItem>;
}
