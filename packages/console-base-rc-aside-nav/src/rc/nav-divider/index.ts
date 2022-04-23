import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';

import {
  SPACING_DIVIDER_H,
  SPACING_DIVIDER_V
} from '../../const';

export default styled.hr`
  margin: ${SPACING_DIVIDER_V}px ${SPACING_DIVIDER_H}px;
  padding: 0;
  border: 0;
  background: linear-gradient(90deg, ${COLOR.BG_SECONDARY_FADE} 0%, ${COLOR.BORDER_SECONDARY} 50%, ${COLOR.BG_SECONDARY_FADE} 100%);
  background: linear-gradient(90deg, var(--cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 0%, var(--cb-color-border-secondary, ${COLOR.BORDER_SECONDARY}) 50%, var(cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 100%);
  height: 1px;
`;
