import styled, {
  css
} from 'styled-components';

import {
  IProps
} from '../../types';

const cssVertical = css`
  flex-direction: column;
`;

const cssWrap = css`
  flex-wrap: wrap;
`;

/**
 * 一个简单的 flex 布局容器
 */
export default styled.div<IProps>`
  display: flex;
  ${props => (props.vertical ? cssVertical : null)};
  ${props => (props.wrapping ? cssWrap : null)};
  ${props => (props.align ? css`
    align-items: ${props.align};
  ` : null)};
  ${props => (props.justify ? css`
    justify-content: ${props.justify};
  ` : null)};
`;
