import React from 'react';
import {
  CSSTransition
} from 'react-transition-group';

import {
  useRcProps,
  useVisible
} from '../../model';
import Tooltip from '../../rc/tooltip';

export default function TheTooltip(): JSX.Element {
  const visible = useVisible();
  const rcProps = useRcProps();
  
  return <CSSTransition {...{
    in: visible,
    unmountOnExit: true,
    timeout: {
      enter: 16,
      exit: 200
    }
  }}>
    <Tooltip {...rcProps} />
  </CSSTransition>;
}