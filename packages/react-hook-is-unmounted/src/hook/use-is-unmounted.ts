import {
  useRef,
  useCallback,
  useEffect
} from 'react';

export default function useIsUnmounted(): () => boolean {
  const ref = useRef<boolean>(false);
  const isUnmounted = useCallback(() => ref.current, []);
  
  useEffect(() => {
    return () => {
      ref.current = true;
    };
  }, []);
  
  return isUnmounted;
}
