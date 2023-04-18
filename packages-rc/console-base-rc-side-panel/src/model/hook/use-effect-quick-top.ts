import {
  useCallback,
  useEffect
} from 'react';

import {
  QUICK_TOP_VISIBLE_OFFSET
} from '../const';

import useModelProps from './_use-model-props';
import useVisible from './use-visible';
import useCollapsed from './use-collapsed';
import useHandleSetQuickTopVisible from './use-handle-set-quick-top-visible';

export default function useEffectQuickTop(): void {
  const {
    quickTopContainer
  } = useModelProps();
  const visible = useVisible();
  const collapsed = useCollapsed();
  const handleSetQuickTopVisible = useHandleSetQuickTopVisible();
  
  const handleToggleVisible = useCallback(() => {
    if (!quickTopContainer) {
      return;
    }
    
    handleSetQuickTopVisible(((quickTopContainer as Window).scrollY || (quickTopContainer as HTMLElement).scrollTop) > QUICK_TOP_VISIBLE_OFFSET);
  }, [quickTopContainer, handleSetQuickTopVisible]);
  
  // container 变化导致 handleToggleVisible 变化，此时需要执行一次
  useEffect(handleToggleVisible, [handleToggleVisible]);
  
  // 对 container 进行 scroll 的事件绑定
  useEffect(() => {
    if (!quickTopContainer || !visible || collapsed) {
      return;
    }
    
    quickTopContainer.addEventListener('scroll', handleToggleVisible);
    
    return () => quickTopContainer.removeEventListener('scroll', handleToggleVisible);
  }, [visible, collapsed, quickTopContainer, handleToggleVisible]);
}
