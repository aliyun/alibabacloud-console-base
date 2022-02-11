import {
  TTheme
} from '../types';
import {
  MIN_WIDTH
} from '../const';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useTheme(): TTheme {
  const {
    theme
  } = useModelProps();
  const {
    width
  } = useModelState();
  
  if (width <= 0) {
    return theme;
  }
  
  switch (theme) {
    case 'full':
      if (width < MIN_WIDTH.SIMPLE_NO_TEXT) {
        return 'simplest';
      }
      
      if (width < MIN_WIDTH.FULL_NO_TEXT) {
        return 'simple';
      }
      
      break;
    case 'simple':
      if (width < MIN_WIDTH.SIMPLE_NO_TEXT) {
        return 'simplest';
      }
      
      break;
    default:
      break;
  }
  
  return theme;
}