import styled from 'styled-components';

import {
  Z_INDEX_HEADER
} from '../../const';

/**
 * 没有特别的样式，不适合 padding 等
 */
export default styled.header`
  position: relative;
  z-index: ${Z_INDEX_HEADER};
`;