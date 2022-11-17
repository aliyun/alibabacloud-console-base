import {
  useEffect
} from 'react';

import {
  setApiInspectorProduct
} from '@alicloud/console-base-messenger-api-inspector';

import {
  IMessengerApiInspector
} from '../../types';

export default function MessengerApiInspector({
  product
}: IMessengerApiInspector): null {
  useEffect(() => {
    setApiInspectorProduct(product);
  }, [product]);
  
  useEffect(() => {
    return () => setApiInspectorProduct('');
  }, [product]);
  
  return null;
}