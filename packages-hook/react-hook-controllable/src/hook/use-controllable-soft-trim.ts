import {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  IOnChange,
  THookReturn
} from '../types';
import {
  isEqualAfterTrim,
  safeTrim
} from '../util';

import useControllable from './use-controllable';

/**
 * 软 trim，不至于不可输入空格，但 onChange 永远得到的是 trim 后的值
 */
export default function useControllableSoftTrim<A extends Array<unknown> = []>(softTrim = true, value?: string, defaultValue?: string, onChange?: IOnChange<string, A>): THookReturn<string, A> {
  const [controllableValue, setControllableValue] = useControllable('', value, defaultValue, onChange);
  const [stateValue, setStateValue] = useState(controllableValue);
  
  const handleSoftTrimChange = useCallback((valueNew: string, ...args: A) => {
    setStateValue(valueNew);
    
    if (!isEqualAfterTrim(controllableValue, valueNew)) {
      setControllableValue(safeTrim(valueNew), ...args);
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
