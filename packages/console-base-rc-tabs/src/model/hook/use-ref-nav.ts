import {
  MutableRefObject
} from 'react';

import useModelRef from './_use-model-ref';

export default function useRefNav(): MutableRefObject<HTMLDivElement> {
  return useModelRef().refNav;
}
