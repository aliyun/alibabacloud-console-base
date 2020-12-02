import React from 'react';
import Provider from '../model';
import Ui from './ui';
export default function ToolkitWithProvider(props) {
  return /*#__PURE__*/React.createElement(Provider, {
    props: props
  }, /*#__PURE__*/React.createElement(Ui, null));
}