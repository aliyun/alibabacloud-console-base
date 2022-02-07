import styled from 'styled-components';

import {
  SIZE,
  mixinTextTertiary
} from '@alicloud/console-base-theme';

import {
  INNER_HEIGHT_PX
} from '../const';

const ScInnerExtra = styled.span`
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  ${mixinTextTertiary}
  
  i {
    vertical-align: middle;
  }
`;

export const ScInnerLeft = styled(ScInnerExtra)`
  padding-left: ${SIZE.PADDING_X_FORM_CONTROL_M - 1}px;
`;

export const ScInnerRight = styled(ScInnerExtra)`
  padding-right: 4px;
  
  &:last-child {
    padding-right: ${SIZE.PADDING_X_FORM_CONTROL_M - 1}px;
  }
`;