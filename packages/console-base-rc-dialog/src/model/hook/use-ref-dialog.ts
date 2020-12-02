import {
  MutableRefObject
} from 'react';

import useModelRef from './_use-model-ref';

export default function useRefDialog(): MutableRefObject<HTMLDivElement> {
  return useModelRef().refDialog;
}

