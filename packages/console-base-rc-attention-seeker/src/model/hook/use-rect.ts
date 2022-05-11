import {
  IRect
} from '../types';

import useModelState from './_use-model-state';

export default function useRect(): IRect {
  return useModelState().rectStyle;
}
