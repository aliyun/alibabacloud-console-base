import {
  MutableRefObject
} from 'react';

import useModelRef from './_use-model-ref';

export default function useRefDropdown(): MutableRefObject<HTMLDivElement> {
  return useModelRef().refDropdown;
}
