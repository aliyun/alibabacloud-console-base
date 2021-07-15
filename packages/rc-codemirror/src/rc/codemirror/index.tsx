import _forEach from 'lodash/forEach';
import React, {
  useRef,
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  Editor,
  EditorEventMap
} from 'codemirror';

import {
  IFnConvertValue,
  IPropsCodeMirror
} from '../../types';
import createEditor from '../../util/create-editor';
import computeScrollHeight from '../../util/compute-scroll-height';

import Wrapper from './wrapper';

function convertValue(displayValue: string, convert?: IFnConvertValue): string {
  return convert ? convert(displayValue) || '' : displayValue;
}

function usePrevious<T = string>(value: T): T | null {
  const ref = useRef<T | null>(null);
  
  useEffect(() => {
    ref.current = value;
  });
  
  return ref.current;
}

/**
 * CodeMirror
 */
export default function CodeMirror({
  conf,
  convertValueToDisplay,
  convertValueFromDisplay,
  minLines = 6,
  maxLines = 30,
  value = '',
  onChange,
  ...props
}: IPropsCodeMirror): JSX.Element {
  const refWrapper = useRef<HTMLDivElement>(null);
  const [stateDisplayValue, setStateDisplayValue] = useState<string>(convertValue(value, convertValueToDisplay));
  const [stateEditor, setStateEditor] = useState<Editor | null>(null);
  const prevValue = usePrevious(value);
  
  const handleChange = useCallback((editor: Editor) => {
    const newValue = editor.getValue();
    
    setStateDisplayValue(newValue);
    
    if (onChange) {
      onChange(convertValue(newValue, convertValueFromDisplay));
    }
  }, [convertValueFromDisplay, onChange]);
  
  useEffect(() => {
    if (!refWrapper.current || stateEditor) {
      return;
    }
    
    const editor: Editor = createEditor(refWrapper.current, stateDisplayValue, conf);
    
    editor.on('change', handleChange);
    
    _forEach(conf?.on, (fn, k) => editor.on(k as keyof EditorEventMap, fn));
    
    setStateEditor(editor);
  }, [conf, stateEditor, stateDisplayValue, setStateEditor, handleChange]);
  
  useEffect(() => {
    if (!stateEditor) {
      return;
    }
    
    const newDisplayValue = convertValue(value, convertValueToDisplay);
    
    if (prevValue !== value && stateDisplayValue !== newDisplayValue) {
      setStateDisplayValue(newDisplayValue);
      stateEditor.setValue(newDisplayValue);
    }
  }, [prevValue, value, stateDisplayValue, convertValueToDisplay, stateEditor]);
  
  return <Wrapper ref={refWrapper} {...{
    ...props,
    minHeight: computeScrollHeight(minLines),
    maxHeight: computeScrollHeight(maxLines)
  }} />;
}
