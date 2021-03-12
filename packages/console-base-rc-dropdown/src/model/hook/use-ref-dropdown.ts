import {
  MutableRefObject
} from 'react';

import useModelContext from './_use-model-context';

export default function useRefDropdown(): MutableRefObject<HTMLDivElement | null> {
  return useModelContext().refDropdown;
}
