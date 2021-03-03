import {
  MutableRefObject
} from 'react';

import useModelRef from './_use-model-ref';

export default function useRefTabs(): MutableRefObject<HTMLDivElement | null> {
  return useModelRef().refTabs;
}
