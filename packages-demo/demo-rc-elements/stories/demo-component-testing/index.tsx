import React from 'react';

import {
  InputSwitch,
  InputSwitchProps,
  ComponentTesting
} from '../../src';
import Shared from '../_shared';

const DEFAULT_PROPS = {
  '/value': true
};

function renderer(props: InputSwitchProps): JSX.Element {
  return <InputSwitch {...props} />;
}

export default function DemoComponentTesting(): JSX.Element {
  return <>
    <Shared />
    <ComponentTesting<InputSwitchProps> {...{
      componentName: 'InputSwitch',
      componentPackageName: '@alicloud/demo-rc-element',
      componentIsDefaultExport: false,
      defaultProps: DEFAULT_PROPS,
      renderer
    }} />
  </>;
}
