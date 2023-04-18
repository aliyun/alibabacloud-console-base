import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  useProps
} from '../../../../model';

const ScToUpperLevel = styled(Button)`
  i {
    font-size: 20px;
  }
`;

export default function ToUpperLevel(): JSX.Element {
  const {
    upperTitle,
    upperHref
  } = useProps();
  
  return <ScToUpperLevel {...{
    block: true,
    iconLeft: upperTitle ? 'angle-left' : undefined,
    iconSpacing: 'small',
    label: upperTitle || <Icon type="angle-left" />,
    theme: ButtonTheme.TEXT_TERTIARY,
    // textAlign: upperTitle ? 'left' : 'center',
    textAlign: 'left',
    href: upperHref
  }} />;
}
