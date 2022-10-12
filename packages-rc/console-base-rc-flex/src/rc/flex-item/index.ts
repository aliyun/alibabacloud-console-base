import styled from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';

import {
  IPropsItem
} from '../../types';

export default styled.div<IPropsItem>`
  flex: ${props => props.n || 1};
  ${props => (props.ellipsis ? mixinTypoEllipsis : null)}
`;
