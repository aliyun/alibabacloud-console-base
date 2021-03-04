import React from 'react';

import Icon from './icon';
import WebFont from './web-font';

export default function DemoDefault(): JSX.Element {
  return <>
    <div>Icon</div>
    <Icon type="alibaba" />
    <div>WebFont</div>
    <WebFont />
  </>;
}
