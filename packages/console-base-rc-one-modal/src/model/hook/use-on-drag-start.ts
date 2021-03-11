import useDispatchRndDragStart from './use-dispatch-rnd-drag-start';

export default function useOnDragStart(): () => void {
  return useDispatchRndDragStart();
}
