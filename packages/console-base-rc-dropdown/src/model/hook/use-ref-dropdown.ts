import {
  MutableRefObject
} from 'react';

import useModelRef from './_use-model-ref';

export default function useRefDropdown(): MutableRefObject<HTMLDivElement | null> {
  return useModelRef().refDropdown;
}
