import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useHandleLogo from './use-handle-logo';

function getVisibleTopBottom(container: HTMLElement): number {
  const {
    offsetWidth
  } = container;

  return offsetWidth;
}

/**
 * 根据 container 的状态设置按钮的显隐状态
 */
export default function useHandleReset(): () => void {
  const {
    container
  } = useModelProps();
  const handleLogo = useHandleLogo();
  
  return useCallback((): void => {
    if (!container) {
      return;
    }

    const width = getVisibleTopBottom(container);

    handleLogo(width);
  }, [container, handleLogo]);
}