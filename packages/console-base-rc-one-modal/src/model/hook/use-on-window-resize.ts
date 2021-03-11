import useDispatchRefreshWindowSize from './use-dispatch-refresh-window-size';

export default function useOnWindowResize(): () => void {
  return useDispatchRefreshWindowSize();
}
