import {
  EMicroBrowserMode
} from '../enum';

import {
  ISizeConfig,
  ITabsProps
} from './common';

export interface IModelProps extends ISizeConfig {
  // 内容
  tabs: ITabsProps;
  affix?: string | null | Element;
  // 长相
  mode?: EMicroBrowserMode;
  visible?: boolean;
  // 行为
  zIndex?: number;
  minimizable?: boolean;
  // 回调
  onModeChange?(mode: EMicroBrowserMode): void;
  onClose?(): void;
}
