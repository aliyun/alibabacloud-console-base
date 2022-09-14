import useDispatchRndResizeStart from './use-dispatch-rnd-resize-start';

export default function useOnResizeStart(): () => void {
  return useDispatchRndResizeStart();
}
