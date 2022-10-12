import {
  keyframes,
  createGlobalStyle
} from 'styled-components';

import {
  CLASS_ATTENTION_SEEKER_ELEMENT,
  CLASS_ATTENTION_SEEKER_ELEMENT_INLINE
} from '../../const';

const kfFlash = keyframes`
  from,
  50%,
  to {
    opacity: 1;
  }
  
  25%,
  75% {
    opacity: 0.1;
  }
`;

// transform 对 inline 元素无效
const kfAttention = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }
  
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -4px, 0);
  }
  
  40%,
  60%,
  80% {
    transform: translate3d(0, 4px, 0);
  }
`;

export default createGlobalStyle`
  /* stylelint-disable selector-class-pattern */
  .${CLASS_ATTENTION_SEEKER_ELEMENT} {
    animation-name: ${kfAttention};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
  }
  
  .${CLASS_ATTENTION_SEEKER_ELEMENT_INLINE} {
    animation-name: ${kfFlash};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
  }
`;