import {
  TStringOrJSX
} from '../../types';

import useModelState from './_use-model-state';
import useProps from './use-props';

export default function useDialogTitle(): TStringOrJSX | undefined {
  const {
    title
  } = useProps();
  const {
    data
  } = useModelState();
  
  return typeof title === 'function' ? title(data) : title;
}
