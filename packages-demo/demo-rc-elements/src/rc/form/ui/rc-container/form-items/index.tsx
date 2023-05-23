import React from 'react';

import {
  useProps
} from '@alicloud/rc-model-form';

import {
  getFormItemKey
} from '../../util';
import Item from '../form-item';

export default function FormItems(): JSX.Element {
  const {
    items
  } = useProps();
  
  return <>{items.map((v, i): null | JSX.Element => {
    if (!v) {
      return null;
    }
    
    return <Item {...v} key={getFormItemKey(v, i)} />;
  })}</>;
}
