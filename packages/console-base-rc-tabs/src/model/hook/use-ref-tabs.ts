import {
  MutableRefObject
} from 'react';

import useModelContext from './_use-model-context';

export default function useRefTabs(): MutableRefObject<HTMLDivElement | null> {
  return useModelContext().refTabs;
}
