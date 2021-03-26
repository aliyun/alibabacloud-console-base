import {
  MutableRefObject
} from 'react';

import useModelContext from './_use-model-context';

export default function useRefDrop(): MutableRefObject<HTMLDivElement | null> {
  return useModelContext().refDrop;
}
