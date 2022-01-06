import React from 'react';

import Model, {
  ModelProps
} from '../model';

import Ui from './ui';
import Lifecycle from './lifecycle';

// TODO 还用不了
// 参考
// https://github.com/floating-ui/floating-ui - https://popper.js.org/
// https://github.com/mohsinulhaq/react-popper-tooltip
// https://github.com/atomiks/tippyjs - https://atomiks.github.io/tippyjs/
// https://github.com/wwayne/react-tooltip - https://wwayne.github.io/react-tooltip/
export default function WithProvider(props: ModelProps): JSX.Element {
  return <Model props={props}>
    <Ui />
    <Lifecycle />
  </Model>;
}
