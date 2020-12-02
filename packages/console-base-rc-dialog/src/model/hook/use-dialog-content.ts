import {
  TStringOrJSX
} from '../../types';

import useModelProps from './_use-model-props';

export default function useDialogContent(): TStringOrJSX | undefined {
  const {
    content
  } = useModelProps();
  
  return content;
}

