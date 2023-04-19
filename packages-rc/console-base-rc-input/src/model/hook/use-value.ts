import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useValue(): string {
  const {
    value,
    defaultValue
  } = useModelProps();
  const {
    value: valueInState,
    composing
  } = useModelState();
  
  // 输入法正在输入，仅取 state 中的值
  if (composing) {
    return valueInState || '';
  }
  
  return value ?? valueInState ?? defaultValue ?? '';
}
