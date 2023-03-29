import {
  useState,
  useCallback
} from 'react';

import {
  IOnChange,
  THookReturn
} from '../types';

/**
 * 类型明确的情况下（非泛型场景），可以使用此带最终默认值的受控 hook
 */
export default function useControllable<T = string>(finalDefault: T, value?: T, defaultValue?: T, onChange?: IOnChange<T>): THookReturn<T> {
  const [stateValue, setStateValue] = useState<T>(value ?? defaultValue ?? finalDefault);
  const finalValue = value !== undefined ? value : stateValue;
  
  const handleChange = useCallback((valueNew: T = finalDefault, ...args: unknown[]) => {
    setStateValue(valueNew);
    onChange?.(valueNew, ...args);
  }, [onChange, finalDefault]);
  
  return [finalValue, handleChange];
}
