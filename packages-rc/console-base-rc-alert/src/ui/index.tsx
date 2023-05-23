import React from 'react';
import {
  CSSTransition
} from 'react-transition-group';

import {
  useVisible
} from '../model';

import {
  Alert,
  AlertIcon,
  AlertContent,
  AlertX
} from './rc-container';

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
