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
  zIndex?: number;
  // 行为
  minimizable?: boolean;
  pinnable?: boolean; // 是否能在靠右模式下进一步挤压 body（给 padding-right）
  // 回调
  onModeChange?(mode: EMicroBrowserMode): void;
  onClose?(): void;
}
