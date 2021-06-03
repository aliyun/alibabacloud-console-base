import useModelState from './_use-model-state';
import useModelProps from './_use-model-props';

export default function useActiveKey(): string | number {
  const {
    activeKey: activeKeyInProps,
    defaultActiveKey
  } = useModelProps();
  const {
    activeKey: activeKeyInState
  } = useModelState();
  
  return activeKeyInProps ?? activeKeyInState ?? defaultActiveKey ?? 0;
}
