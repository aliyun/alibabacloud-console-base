import {
  useState,
  useCallback
} from 'react';

import {
  IFnOnChange,
  THookReturn
} from '../types';

/**
 * 合理受控
 */
export default function useControllableValue<T = string>(finalDefault: T, value?: T, defaultValue?: T, onChange?: IFnOnChange<T>): THookReturn<T> {
  const [stateValue, setStateValue] = useState<T>(value || defaultValue || finalDefault);
  const finalValue = value !== undefined ? value : stateValue;
  
  const handleChange = useCallback((valueNew: T) => {
    setStateValue(valueNew);
    onChange?.(valueNew);
  }, [onChange]);
  
  return [finalValue, handleChange];
}