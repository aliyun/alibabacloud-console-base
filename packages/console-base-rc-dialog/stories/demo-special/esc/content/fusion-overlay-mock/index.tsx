import React, {
  ReactPortal
} from 'react';
import {
  createPortal
} from 'react-dom';
import styled from 'styled-components';

const ScFusionOverlayMock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  padding: 12px;
  background: #f00;
  color: #fff;
`;

export default function FusionOverlayMock(): ReactPortal {
  return createPortal(<ScFusionOverlayMock className="next-overlay-wrapper opened">
    FusionOverlayMock
  </ScFusionOverlayMock>, document.body);
}
