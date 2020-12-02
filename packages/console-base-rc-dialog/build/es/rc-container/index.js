import React from 'react';
import { createPortal } from 'react-dom';
import { Provider } from '../model';
import Ui from './ui';
/**
 * 带 context 的 dialog
 */

export default function DialogWithProvider(props) {
  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Provider, {
    props: props
  }, /*#__PURE__*/React.createElement(Ui, null)), document.body);
}