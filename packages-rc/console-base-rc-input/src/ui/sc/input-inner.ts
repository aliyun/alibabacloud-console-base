import styled from 'styled-components';

import {
  SIZE,
  mixinTextPrimary,
  mixinTextTertiary
} from '@alicloud/console-base-theme';

import {
  INNER_HEIGHT_PX
} from '../const';

interface IScProps {
  focused?: boolean;
}

const ScInputInnerBase = styled.span<IScProps>`
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  ${props => (props.focused ? mixinTextPrimary : mixinTextTertiary)}
  
  i {
    vertical-align: middle;
  }
`;

export const ScInputInnerLeft = styled(ScInputInnerBase)`
  padding-left: ${SIZE.PADDING_X_FORM_CONTROL_M - 1}px;
`;

export const ScInputInnerRight = styled(ScInputInnerBase)`
  padding-right: 4px;
  
  &:last-child {
    padding-right: ${SIZE.PADDING_X_FORM_CONTROL_M - 1}px;
  }
`;