import styled, {
  keyframes
} from 'styled-components';

import {
  BEACON_SIZE,
  BEACON_COLOR,
  BEACON_COLOR_DARK,
  BACON_HALO_SCALE_MIN,
  BACON_HALO_SCALE_MAX
} from '../../const';

const kfBeacon = keyframes`
  0% {
    opacity: 1;
    transform: scale(${BACON_HALO_SCALE_MIN});
  }
  
  70% {
    opacity: 0;
    transform: scale(${BACON_HALO_SCALE_MAX});
  }
  
  100% {
    opacity: 0;
  }
`;

/**
 * 小小导航灯，鼠标穿透
 */
export default styled.span`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: ${BEACON_SIZE}px;
    height: ${BEACON_SIZE}px;
  }
  
  &:before {
    opacity: 0.65;
    background-color: ${BEACON_COLOR};
  }
  
  &:after {
    box-shadow: 0 0 2px 2px ${BEACON_COLOR};
    background-color: transparent;
    animation: ${kfBeacon} 2s infinite linear;
  }
  
  .theme-dark & {
    &:before {
      background-color: ${BEACON_COLOR_DARK};
    }
    
    &:after {
      box-shadow: 0 0 2px 2px ${BEACON_COLOR_DARK};
    }
  }
`;
