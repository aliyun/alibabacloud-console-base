import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';

export default styled.hr`
  margin: 8px 0;
  padding: 0;
  border: 0;
  background: linear-gradient(90deg, ${COLOR.BG_SECONDARY_FADE} 0%, ${COLOR.BORDER_SECONDARY} 50%, ${COLOR.BG_SECONDARY_FADE} 100%);
  background: linear-gradient(90deg, var(--cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 0%, var(--cb-color-border-secondary, ${COLOR.BORDER_SECONDARY}) 50%, var(cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 100%);
  height: 1px;
`;

/**
 * 纵向 hr
 */
export const HrV = styled.hr`
  margin: 0 8px;
  padding: 0;
  border: 0;
  background: linear-gradient(0deg, ${COLOR.BG_SECONDARY_FADE} 0%, ${COLOR.BORDER_SECONDARY} 50%, ${COLOR.BG_SECONDARY_FADE} 100%);
  background: linear-gradient(0deg, var(--cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 0%, var(--cb-color-border-secondary, ${COLOR.BORDER_SECONDARY}) 50%, var(cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 100%);
  width: 1px;
  height: 100%;
`;
