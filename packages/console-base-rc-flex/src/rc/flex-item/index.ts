import styled from 'styled-components';

import {
  IPropsItem
} from '../../types';

export default styled.div<IPropsItem>`
  flex: ${props => props.n || 1};
`;
