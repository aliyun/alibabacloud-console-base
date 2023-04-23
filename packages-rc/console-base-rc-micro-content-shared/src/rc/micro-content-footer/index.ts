import styled from 'styled-components';

import {
  mixinShadowSUp
} from '@alicloud/console-base-theme';

import {
  HEIGHT_FOOTER,
  Z_INDEX_FOOTER
} from '../../const';

export default styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: ${Z_INDEX_FOOTER};
  padding: 0 16px;
  height: ${HEIGHT_FOOTER}px;
  line-height: ${HEIGHT_FOOTER}px;
  ${mixinShadowSUp}
`;