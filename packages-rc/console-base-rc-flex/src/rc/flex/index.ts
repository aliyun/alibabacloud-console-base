import styled, {
  css
} from 'styled-components';

import {
  IPropsFlex
} from '../../types';

/**
 * 一个简单的 flex 布局容器
 */
export default styled.div<IPropsFlex>`
  display: flex;
  ${props => (props.flex ? css`
    flex: 1;
  ` : null)}
  ${props => (props.vertical ? css`
    flex-direction: column;
  ` : null)}
  ${props => (props.wrapping ? css`
    flex-wrap: wrap;
  ` : null)}
  ${props => (props.align ? css`
    align-items: ${props.align};
  ` : null)}
  ${props => (props.justify ? css`
    justify-content: ${props.justify};
  ` : null)}
`;
