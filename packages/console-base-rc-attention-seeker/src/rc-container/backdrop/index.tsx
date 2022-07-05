import React from 'react';
import {
  createPortal
} from 'react-dom';
import styled from 'styled-components';

import {
  Z_INDEX_BACKDROP
} from '../../const';
import {
  useRefBackdrop,
  useBackdropPath,
  useHandleCloseOnBackdropClick
} from '../../model';

const ScBackdrop = styled.svg`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  z-index: ${Z_INDEX_BACKDROP};
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  
  path {
    pointer-events: all;
  }
`;

export default function Backdrop(): JSX.Element {
  const refBackdrop = useRefBackdrop();
  const backdropPath = useBackdropPath();
  const handleCloseOnBackdropClick = useHandleCloseOnBackdropClick();
  
  return createPortal(<ScBackdrop {...{
    ref: refBackdrop,
    className: 'J_fixed_right_will_be_pushed_left',
    onClick: handleCloseOnBackdropClick
  }}>
    <path d={backdropPath} />
  </ScBackdrop>, document.body);
}
