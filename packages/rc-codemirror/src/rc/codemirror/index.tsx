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
  const [stateEditorDom, setStateEditorDom] = useState<HTMLDivElement | null>(null);
  const [stateEditor, setStateEditor] = useState<Editor | null>(null);
  const [stateDisplayValue, setStateDisplayValue] = useState<string>(convertValue(value, convertValueToDisplay));
  const prevValue = usePrevious(value);
  
  const handleChange = useCallback((editor: Editor) => {
    const newValue = editor.getValue();
    
    setStateDisplayValue(newValue);
    
    if (onChange) {
      onChange(convertValue(newValue, convertValueFromDisplay));
    }
  }, [convertValueFromDisplay, onChange]);
  
  useEffect(() => {
    if (!stateEditorDom || stateEditor) {
      return;
    }
    
    const editor: Editor = createEditor(stateEditorDom, stateDisplayValue, conf); // TODO 要不要更新 conf？
    
    _forEach(conf?.on, (fn, k) => editor.on(k as keyof EditorEventMap, fn));
    
    setStateEditor(editor);
  }, [conf, stateEditorDom, stateEditor, stateDisplayValue, setStateEditor]);
  
  // onChange 变化则更新之，需要解除旧有的
  useEffect(() => {
    if (!stateEditor) {
      return;
    }
    
    stateEditor.on('change', handleChange);
    
    return () => stateEditor.off('change', handleChange);
  }, [handleChange, stateEditor]);
  
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
  
  useEffect(() => { // CodeMirror 未提供 destroy 方法，只需要解除实例的引用即可
    return () => setStateEditor(null);
  }, [setStateEditor]);
  
  return <Wrapper ref={setStateEditorDom} {...{
    ...props,
    minHeight: computeScrollHeight(minLines),
    maxHeight: computeScrollHeight(maxLines)
  }} />;
}
