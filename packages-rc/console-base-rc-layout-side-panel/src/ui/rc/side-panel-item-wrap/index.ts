import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';

/**
 * 工具的外层包裹
 */
export default styled.div`
  position: relative;
  width: ${SIZE.WIDTH_SIDE_PANEL}px;
  height: ${SIZE.WIDTH_SIDE_PANEL}px;
  transition: all ease-in-out 250ms;
`;