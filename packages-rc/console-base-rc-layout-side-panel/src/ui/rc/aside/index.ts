import styled from 'styled-components';

import {
  SIZE,
  Z_INDEX,
  mixinBgPrimary,
  mixinShadowSLeft
} from '@alicloud/console-base-theme';

import {
  SIZE_BUTTON_WRAP_HEIGHT
} from '../../const';

export default styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${Z_INDEX.SIDE_PANEL};
  padding: 8px 0 ${SIZE_BUTTON_WRAP_HEIGHT}px 0;
  width: ${SIZE.WIDTH_SIDE_PANEL}px;
  transition: all ease-in-out 250ms;
  ${mixinBgPrimary}
  ${mixinShadowSLeft}
  
  /* stylelint-disable selector-class-pattern */
  .hasTopbar & {
    top: ${SIZE.HEIGHT_TOP_NAV}px;
  }
`;
