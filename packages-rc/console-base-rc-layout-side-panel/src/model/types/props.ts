import {
  ISidePanelToolProps
} from './common';

export interface IModelProps {
  /**
   * 通过 onToggleCollapsed 实现受控
   */
  collapsed?: boolean;
  /**
   * 自定义工具
   */
  tools?: ISidePanelToolProps[];
  toolsSystem?: ISidePanelToolProps[];
  /**
   * 是否展示推入按钮
   */
  onToggleCollapsed?(collapsed: boolean): void;
}