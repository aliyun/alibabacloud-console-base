import styled from 'styled-components';

import {
  SIZE_BUTTON_WRAP_WIDTH,
  SIZE_BUTTON_WRAP_HEIGHT
} from '../../const';

/**
 * 工具的外层包裹
 */
export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${SIZE_BUTTON_WRAP_WIDTH}px;
  height: ${SIZE_BUTTON_WRAP_HEIGHT}px;
  transition: all ease-in-out 250ms;
`;
