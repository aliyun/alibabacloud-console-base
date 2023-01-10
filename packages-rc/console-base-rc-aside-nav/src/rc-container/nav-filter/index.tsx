import React from 'react';
import styled from 'styled-components';

import Input from '@alicloud/console-base-rc-input';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps,
  useIsFilter,
  useFiltering,
  useHandleFilterTextChange,
  useHandleFilteringChange
} from '../../model';

const ScDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ScIcon = styled(Icon)`
  cursor: pointer;
`;

export default function NavFilter(): JSX.Element {
  const {
    title
  } = useProps();
  const filtering = useFiltering();
  const isFilter = useIsFilter();

  const handleFilteringChange = useHandleFilteringChange();
  const handleFilterTextChange = useHandleFilterTextChange();

  return filtering ? <Input {...{
    focused: true,
    innerRight: <ScIcon {...{
      type: 'search'
    }} />,
    onFocusedChange: handleFilteringChange,
    onChange: handleFilterTextChange
  }} /> : <ScDiv>
    <span>{title}</span>
    {isFilter ? <ScIcon {...{
      type: 'search',
      onClick: () => handleFilteringChange(true)
    }} /> : null}
  </ScDiv>;
}
