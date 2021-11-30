import {
  createGlobalStyle
} from 'styled-components';

import {
  Z_INDEX_SANDWICH_MIDDLE,
  CLASS_THE_ELEMENT
} from '../../const';

export default createGlobalStyle`
  /* stylelint-disable selector-class-pattern */
  .${CLASS_THE_ELEMENT} {
    position: relative;
    z-index: ${Z_INDEX_SANDWICH_MIDDLE};
  }
`;
