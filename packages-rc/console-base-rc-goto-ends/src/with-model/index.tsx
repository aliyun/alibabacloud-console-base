import React from 'react';

import Model, {
  ModelProps
} from '../model';
import Ui from '../ui';

export default function WithProvider({ // 这里之所以析构出来是 props.container 的三元没办法把 props 的类型约束成 container: HTMLElement...
  container,
  ...props
}: ModelProps): JSX.Element | null {
  return container ? <Model {...{
    container,
    ...props
  }}>
    <Ui />
  </Model> : null;
}
