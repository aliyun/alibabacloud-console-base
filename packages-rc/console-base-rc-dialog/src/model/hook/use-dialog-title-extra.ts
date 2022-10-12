import {
  TStringOrJsx
} from '../../types';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDialogTitleExtra(): TStringOrJsx | undefined {
  const {
    titleExtra
  } = useModelProps();
  const {
    data
  } = useModelState();
  
  return typeof titleExtra === 'function' ? titleExtra(data) : titleExtra;
}
