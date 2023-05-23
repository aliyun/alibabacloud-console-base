import React from 'react';

import Model, {
  FormProps
} from '@alicloud/rc-model-form';

import Ui from '../ui';

export default function WithProvider(props: FormProps): JSX.Element {
  return <Model {...props}>
    <Ui />
  </Model>;
}
