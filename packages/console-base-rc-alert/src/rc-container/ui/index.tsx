import React from 'react';
import {
  CSSTransition
} from 'react-transition-group';

import {
  useVisible
} from '../../model';
import Alert from '../alert';
import AlertIcon from '../alert-icon';
import AlertContent from '../alert-content';
import AlertX from '../alert-x';

export default function Ui(): JSX.Element {
  const visible = useVisible();
  
  return <CSSTransition {...{
    in: visible,
    unmountOnExit: true,
    timeout: {
      enter: 16,
      exit: 200
    }
  }}>
    <Alert>
      <AlertIcon />
      <AlertContent />
      <AlertX />
    </Alert>
  </CSSTransition>;
}