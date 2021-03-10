import {
  MutableRefObject
} from 'react';

import useModelContext from './_use-model-context';

export default function useRefNav(): MutableRefObject<HTMLDivElement | null> {
  return useModelContext().refNav;
}
