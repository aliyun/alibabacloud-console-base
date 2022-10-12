import React from 'react';
import styled from 'styled-components';

import {
  getContentPadding
} from '../../../util';
import {
  ModelPropsTab,
  TabContentPadding,
  useProps,
  useActiveTab
} from '../../../model';

interface IProps {
  tab: ModelPropsTab;
}

interface IScPropsNavItem {
  active: boolean;
  padding: TabContentPadding;
}

const ScContentItem = styled.div<IScPropsNavItem>`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: ${props => getContentPadding(props.padding)};
  box-sizing: border-box;
  height: 100%;
`;

export default function ContentItem({
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
  
  return <ScContentItem {...{
    active,
    padding: contentPadding,
    ...contentAttr
  }}>
    {content}
  </ScContentItem>;
}
