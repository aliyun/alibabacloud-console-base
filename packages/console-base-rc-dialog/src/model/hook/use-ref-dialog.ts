import {
  MutableRefObject
} from 'react';

import useModelContext from './_use-model-context';

export default function useRefDialog(): MutableRefObject<HTMLDivElement | null> {
  return useModelContext().refDialog;
}

