import {
  EMicroBrowserMode
} from '../enum';

import useModelProps from './_use-model-props';
import useMode from './use-mode';

export default function useRndSizeHeightMin(): number {
  const {
    heightMin
  } = useModelProps();
  const mode = useMode();
  
  return mode === EMicroBrowserMode.MINIMIZED ? 0 : heightMin + 54; // 54 包含了顶部工具栏的高度（这里是硬编码 需要注意）
}
