import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

// 隐藏 logo 的最小宽度
const HIDE_WIDTH = 1000;

export default function useHandleLogo(): (width: number) => void {
  const dispatch = useModelDispatch();

  return useCallback((e: number): void => {
    let topNavState = true;

    if (e <= HIDE_WIDTH) {
      topNavState = false;
    }

    dispatch({
      type: EAction.SET_LOGO_STATE,
      payload: topNavState
    });
  }, [dispatch]);
}