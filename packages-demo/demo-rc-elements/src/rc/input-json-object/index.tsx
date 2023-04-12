import {
  isPlainObject as _isPlainObject,
  isArray as _isArray,
  isEqual as _isEqual
} from 'lodash-es';
import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import CodeMirror, {
  determineMimeType
} from '@alicloud/rc-codemirror';

import {
  IPropsInputJsonObject
} from '../../types';

const mode = determineMimeType('json');

function safeStringify(o?: unknown): string {
  if (!o) {
    return '';
  }
  
  try {
    return JSON.stringify(o, null, 2);
  } catch (err) {
    return `Error: failed to stringify ${(err as Error).message}`;
  }
}

function parseWithError<T extends object>(value: string, arrayMode: boolean): T {
  let o: unknown;
  
  if (value) {
    o = JSON.parse(value);
  }
  
  if (!o) {
    o = arrayMode ? [] : {};
  } else if (arrayMode && !_isArray(o)) {
    o = [];
  } else if (!arrayMode && !_isPlainObject(o)) {
    o = {};
  }
  
  return o as T;
}

/**
 * JSON 对象或数组 的编辑，输入是对象或数组，输出也是
 */
export default function InputJsonObject<T extends object>({
  value,
  arrayMode = _isArray(value),
  onChange,
  ...props
}: IPropsInputJsonObject<T>): JSX.Element {
  const [stateValueString, setStateValueString] = useState<string>(safeStringify(value));
  const handleChange = useCallback(valueNew => {
    setStateValueString(stateValueString);
    
    if (!onChange) {
      return;
    }
    
    try {
      const o = parseWithError<T>(valueNew, arrayMode);
      
      if (!_isEqual(value, o)) {
        onChange(o);
      }
    } catch (err) {
      // ignore
    }
  }, [value, arrayMode, onChange, stateValueString]);
  
  useEffect(() => {
    try {
      if (!_isEqual(value, parseWithError(stateValueString, arrayMode))) {
        setStateValueString(safeStringify(value));
      }
    } catch (err) {
      // ignore
    }
  }, [value, arrayMode, stateValueString]);
  
  return <CodeMirror {...{
    conf: {
      mode
    },
    ...props,
    value: stateValueString,
    onChange: handleChange
  }} />;
}
