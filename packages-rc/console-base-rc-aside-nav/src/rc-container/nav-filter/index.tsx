import React from 'react';
import styled from 'styled-components';

import Input from '@alicloud/console-base-rc-input';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps,
  useIsFilter,
  useFiltering,
  useHandleFilterTextChange,
  useHandleFiltering,
  useHandleKeydownEsc
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

  const handleFiltering = useHandleFiltering();
  const handleFilterTextChange = useHandleFilterTextChange();
  const handleKeydownEsc = useHandleKeydownEsc();

  return filtering ? <Input {...{
    focused: true,
    innerRight: <ScIcon {...{
      type: 'x',
      onClick: () => handleFiltering(false)
    }} />,
    onChange: handleFilterTextChange,
    onKeyDown: handleKeydownEsc
  }} /> : <ScDiv>
    <span>{title}</span>
    {isFilter ? <ScIcon {...{
      type: 'search',
      onClick: () => handleFiltering(true)
    }} /> : null}
  </ScDiv>;
}
