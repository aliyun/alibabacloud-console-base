import {
  useRef,
  useCallback
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import {
  useControllable
} from '@alicloud/react-hook-controllable';

// 延时后就不可能有 event 参数了，React 的 SyntheticEvent 机制决定
interface IOptions {
  active?: boolean;
  defaultActive?: boolean;
  timeDelayEnter?: number;
  timeDelayLeave?: number;
  /**
   * 当 active 被 hover 触发后，需要有一定的时间进行保护，以免点击误操
   */
  timeCoolDownActive?: number;
  onEnter?(): void;
  onLeave?(): void;
  onActiveChange?(active: boolean): void;
}

interface IRefValue {
  /**
   * MouseEnter/Leave 执行延时器
   */
  timer: number | null;
  timestampActiveByHover: number;
}

/**
 * 对鼠标进出事件进行延时响应，避免频闪问题
 */
export default function useMouseHover({
  active,
  defaultActive,
  timeDelayEnter = 160,
  timeDelayLeave = timeDelayEnter,
  timeCoolDownActive = 300,
  onEnter,
  onLeave,
  onActiveChange
}: IOptions = {}): [() => void, () => void, () => void] {
  const isUnmounted = useIsUnmounted();
  const [controllableActive, setControllableActive] = useControllable<boolean>(false, active, defaultActive, onActiveChange);
  const refValue = useRef<IRefValue>({
    timer: null,
    timestampActiveByHover: 0
  });
  
  const handleClearTimer = useCallback(() => {
    if (refValue.current.timer) {
      window.clearTimeout(refValue.current.timer);
      
      refValue.current.timer = null;
    }
  }, [refValue]);
  
  /**
   * 鼠标移入，延时响应，避免误触发一些不必要的响应
   */
  const handleMouseEnter = useCallback(() => {
    handleClearTimer();
    
    refValue.current.timer = window.setTimeout(() => {
      if (isUnmounted()) {
        return;
      }
      
      refValue.current.timer = null;
      
      onEnter?.();
      
      if (!controllableActive) {
        refValue.current.timestampActiveByHover = Date.now();
        
        setControllableActive(true);
      }
    }, timeDelayEnter);
  }, [timeDelayEnter, onEnter, isUnmounted, controllableActive, setControllableActive, refValue, handleClearTimer]);
  /**
   * 鼠标移出，延时响应，类似 Dropdown 的组件，需要这样的能力
   */
  const handleMouseLeave = useCallback(() => {
    handleClearTimer();
    
    refValue.current.timer = window.setTimeout(() => {
      if (isUnmounted()) {
        return;
      }
      
      refValue.current.timer = null;
      
      onLeave?.();
    }, timeDelayLeave);
  }, [timeDelayLeave, onLeave, isUnmounted, refValue, handleClearTimer]);
  const handleActiveChange = useCallback(() => {
    handleClearTimer();
    
    const nextActive = !controllableActive;
    
    if (!nextActive) {
      if (refValue.current.timestampActiveByHover > 0 && Date.now() - refValue.current.timestampActiveByHover <= timeCoolDownActive) {
        return;
      }
    }
    
    handleClearTimer();
    setControllableActive(nextActive);
  }, [timeCoolDownActive, setControllableActive, controllableActive, handleClearTimer]);
  
  return [handleMouseEnter, handleMouseLeave, handleActiveChange];
}
