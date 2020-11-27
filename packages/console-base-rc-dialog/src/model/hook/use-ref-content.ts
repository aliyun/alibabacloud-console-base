import {
  MutableRefObject
} from 'react';

import useModelRef from './_use-model-ref';

export default function useRefContent(): MutableRefObject<HTMLDivElement> {
  return useModelRef().refContent;
}

