import {
  MIN_WIDTH
} from '../const';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useTheme from './use-theme';

export default function useNoText(): boolean {
  const {
    noText
  } = useModelProps();
  const {
    width
  } = useModelState();
  const theme = useTheme();
  
  if (noText) {
    return noText;
  }

  switch (theme) {
    case 'full':
      return width < MIN_WIDTH.FULL;
    case 'simple':
      return width < MIN_WIDTH.SIMPLE;
    default:
      return true;
  }
}