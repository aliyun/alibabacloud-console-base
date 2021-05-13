import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDockActive(): boolean {
  const {
    dock
  } = useModelProps();
  const {
    dockActive
  } = useModelState();
  const {
    active = dockActive,
    onActiveChange
  } = dock || {};
  
  return onActiveChange ? active : false; // 有 onActiveChange 才有效
}
