import React from 'react';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useHandleToggleFilterVisibleTrue
} from '../../../../model';

export default function FilterTrigger(): JSX.Element {
  const handleToggleFilterVisibleTrue = useHandleToggleFilterVisibleTrue();
  
  return <Button {...{
    theme: ButtonTheme.TEXT_TERTIARY,
    label: <Icon type="search" />,
    onClick: handleToggleFilterVisibleTrue
  }} />;
}
