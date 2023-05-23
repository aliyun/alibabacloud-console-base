import React from 'react';

import {
  useFormDomProps
} from '@alicloud/rc-model-form';

import {
  FormItems
} from './rc-container';

/**
 * 一个既简单的 Form
 */
export default function Ui(): JSX.Element {
  const formDomProps = useFormDomProps();
  
  return <form {...formDomProps}>
    <FormItems />
  </form>;
}
