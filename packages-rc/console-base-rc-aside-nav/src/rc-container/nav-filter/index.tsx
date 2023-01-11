import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Input from '@alicloud/console-base-rc-input';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps,
  useMinItemsForSearch,
  useFiltering,
  useHandleFilterTextChange,
  useHandleFiltering,
  useHandleKeydownEsc
} from '../../model';

export default function NavFilter(): JSX.Element {
  const {
    title
  } = useProps();
  const filtering = useFiltering();
  const isFilter = useMinItemsForSearch();

  const handleFiltering = useHandleFiltering();
  const handleFilterTextChange = useHandleFilterTextChange();
  const handleKeydownEsc = useHandleKeydownEsc();

  return filtering ? <Input {...{
    focused: true,
    innerRight: <Button {...{
      label: <Icon {...{
        type: 'x'
      }} />,
      onClick: () => handleFiltering(false),
      theme: ButtonTheme.NONE
    }} />,
    onChange: handleFilterTextChange,
    onKeyDown: handleKeydownEsc
  }} /> : <Flex {...{
    justify: 'space-between',
    flex: true
  }}>
    <span>{title}</span>
    {isFilter ? <Button {...{
      label: <Icon {...{
        type: 'search'
      }} />,
      onClick: () => handleFiltering(true),
      theme: ButtonTheme.NONE
    }} /> : null}
  </Flex>;
}
