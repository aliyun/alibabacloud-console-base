import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react';

interface IUseCountDownResult {
  countDown: number;
  setCountDown: Dispatch<SetStateAction<number>>;
}

export default function useCountDown(): IUseCountDownResult {
  const [stateCountDown, setStateCountDown] = useState<number>(0);

  useEffect((): () => void => {
    let timer: number | undefined;
    
    if (stateCountDown > 0) {
      timer = window.setTimeout(() => setStateCountDown(stateCountDown - 1), 1000);
    }
    
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [stateCountDown]);

  return {
    countDown: stateCountDown,
    setCountDown: setStateCountDown
  };
}