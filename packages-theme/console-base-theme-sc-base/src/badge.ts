import styled from 'styled-components';

import {
  mixinBgBrand,
  mixinTextWhite
} from '@alicloud/console-base-theme';

const Sup = styled.sup`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 8px;
  user-select: none;
  cursor: default;
  pointer-events: none;
  ${mixinBgBrand}
  ${mixinTextWhite}
`;

export const BadgeBaseDot = styled(Sup)`
  width: 8px;
  height: 8px;
`;

export const BadgeBaseNumber = styled(Sup)`
  padding: 0 4px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  transform: scale(0.8);
`;