import useModelState from './_use-model-state';
import useProps from './use-props';

export default function useActiveKey(): string | number {
  const {
    activeKey: activeKeyInProps,
    defaultActiveKey
  } = useProps();
  const {
    activeKey: activeKeyInState
  } = useModelState();
  
  return activeKeyInProps ?? activeKeyInState ?? defaultActiveKey ?? 0;
}
