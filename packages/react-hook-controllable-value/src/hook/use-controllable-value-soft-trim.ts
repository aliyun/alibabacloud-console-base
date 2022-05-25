import {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  IFnOnChange,
  THookReturn
} from '../types';

import useControllableValue from './use-controllable-value';

// 避免传入的 value（误传或 JS 下无类型）不是 string 导致的错误
function makSureString(value: unknown = ''): string {
  if (typeof value === 'string') {
    return value;
  }
  
  if (value === null || value === undefined) {
    return '';
  }
  
  return String(value);
}

function safeTrim(value: unknown = ''): string {
  return makSureString(value).trim();
}

function isEqualAfterTrim(value1: string, value2: string): boolean {
  return safeTrim(value1) === safeTrim(value2);
}

/**
 * 软 trim，不至于不可输入空格，但 onChange 永远得到的是 trim 后的值
 */
export default function useControllableValueSoftTrim(softTrim = true, value?: string, defaultValue?: string, onChange?: IFnOnChange<string>): THookReturn<string> {
  const [controllableValue, setControllableValue] = useControllableValue<string>('', value, defaultValue, onChange);
  const [stateValue, setStateValue] = useState(controllableValue);
  
  const handleSoftTrimChange = useCallback((valueNew: string) => {
    setStateValue(valueNew);
    
    if (!isEqualAfterTrim(controllableValue, valueNew)) {
      setControllableValue(safeTrim(valueNew));
    }
  }, [controllableValue, setControllableValue]);
  
  useEffect(() => {
    if (!isEqualAfterTrim(controllableValue, stateValue)) {
      setStateValue(controllableValue);
    }
  }, [stateValue, controllableValue, setStateValue]);
  
  return [
    softTrim ? stateValue : controllableValue,
    softTrim ? handleSoftTrimChange : setControllableValue
  ];
}