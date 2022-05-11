import {
  TStringOrJsx
} from '../../types';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDialogTitle(): TStringOrJsx | undefined {
  const {
    title
  } = useModelProps();
  const {
    data
  } = useModelState();
  
  return typeof title === 'function' ? title(data) : title;
}
