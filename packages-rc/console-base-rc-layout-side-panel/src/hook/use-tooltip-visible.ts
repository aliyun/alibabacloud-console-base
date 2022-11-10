import {
  useState,
  useCallback,
  useMemo
} from 'react';

export default function useTooltipVisible(): [boolean, () => void, () => void] {
  const [stateVisible, setStateVisible] = useState<boolean>(false);
  const handleShow = useCallback(() => setStateVisible(true), [setStateVisible]);
  const handleHide = useCallback(() => setStateVisible(false), [setStateVisible]);
  
  return useMemo(() => [stateVisible, handleShow, handleHide], [stateVisible, handleShow, handleHide]);
}