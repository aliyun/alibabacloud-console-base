import {
  MutableRefObject
} from 'react';

import useModelContext from './_use-model-context';

export default function useRefContent(): MutableRefObject<HTMLDivElement | null> {
  return useModelContext().refContent;
}

