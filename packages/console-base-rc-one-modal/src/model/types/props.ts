import {
  TabsProps
} from '@alicloud/console-base-rc-tabs';

import {
  EModalMode
} from '../enum';

export type IModelPropsTabs = Omit<TabsProps, 'classNameForTabBar' | 'classNameForTabItem' | 'classNameForTabScroller' | 'width'>;

export interface IModelProps {
  // 内容
  tabs: IModelPropsTabs;
  affix?: string | null | Element;
  // 长相
  mode?: EModalMode;
  visible?: boolean;
  zIndex?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  pinnedWidth?: number;
  // 行为
  minimizable?: boolean;
  pinnable?: boolean; // 是否能在靠右模式下进一步挤压 body（给 padding-right）
  // 回调
  onModeChange?(mode: EModalMode): void;
  onClose?(): void;
}
