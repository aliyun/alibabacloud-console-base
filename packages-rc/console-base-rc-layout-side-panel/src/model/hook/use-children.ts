import {
  ReactNode
} from 'react';

import useModelProps from './_use-model-props';

export default function useChildren(): ReactNode | undefined {
  return useModelProps().children;
}