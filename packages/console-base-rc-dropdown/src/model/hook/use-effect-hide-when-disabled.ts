import {
  useEffect
} from 'react';

import useHandleHideWhenDisabled from './use-handle-hide-when-disabled';

export default function useEffectHideWhenDisabled(): void {
  const handleHideWhenDisabled = useHandleHideWhenDisabled();
  
  useEffect(() => {
    handleHideWhenDisabled();
  }, [handleHideWhenDisabled]);
}
