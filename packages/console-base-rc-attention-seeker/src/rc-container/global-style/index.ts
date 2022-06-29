import {
  createGlobalStyle
} from 'styled-components';

import {
  Z_INDEX_SANDWICH_MIDDLE,
  CLASS_THE_ELEMENT,
  CLASS_PARENT_RESET
} from '../../const';

export default createGlobalStyle`
  /* stylelint-disable selector-class-pattern */
  .${CLASS_THE_ELEMENT} {
    position: relative;
    z-index: ${Z_INDEX_SANDWICH_MIDDLE};
  }
  
  .${CLASS_PARENT_RESET} {
    z-index: auto !important;
  }
`;
