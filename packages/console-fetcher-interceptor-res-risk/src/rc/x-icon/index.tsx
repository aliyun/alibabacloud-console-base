import React from 'react';
import styled from 'styled-components';

import Icon, {
  IconProps
} from '@alicloud/console-base-rc-icon';

interface IProps extends Omit<IconProps, 'type'> {
  onClick: () => void;
}

const ScIcon = styled(Icon)`
  cursor: pointer;
`;

export default function XIcon({
  onClick,
  ...props
}: IProps): JSX.Element {
  return <ScIcon {...{
    type: 'x',
    onClick,
    ...props
  }} />;
}
