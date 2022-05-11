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

function isEqualAfterTrim(value1: string, value2: string): boolean {
  return value1.trim() === value2.trim();
}

/**
 * 软 trim，不至于不可输入空格，但 onChange 永远得到的是 trim 后的值
 */
export default function useControllableValueSoftTrim(softTrim = true, value?: string, defaultValue?: string, onChange?: IFnOnChange<string>): THookReturn<string> {
  const [controllableValue, setControllableValue] = useControllableValue('', value, defaultValue, onChange);
  const [stateValue, setStateValue] = useState(controllableValue);
  
  const handleSoftTrimChange = useCallback((valueNew: string) => {
    setStateValue(valueNew);
    
    if (!isEqualAfterTrim(controllableValue, valueNew)) {
      setControllableValue(valueNew.trim());
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