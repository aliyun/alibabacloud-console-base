import React from 'react';
import styled from 'styled-components';

import {
  Z_INDEX_BACKDROP
} from '../../const';
import {
  useHandleClickBackdrop
} from '../../model';

const ScAttentionSeekerMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_INDEX_BACKDROP};
  background-color: rgba(0,0,0,0.25);
  background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  height: 100%;
`;

export default function Backdrop(): JSX.Element {
  const handleBackdropClick = useHandleClickBackdrop();
  
  return <ScAttentionSeekerMask onClick={handleBackdropClick} />;
}
