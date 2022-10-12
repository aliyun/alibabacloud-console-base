import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useValue(): string {
  const {
    value,
    defaultValue
  } = useModelProps();
  const {
    value: valueInState
  } = useModelState();
  
  return value ?? valueInState ?? defaultValue ?? '';
}