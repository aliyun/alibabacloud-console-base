import {
  MessengerSidePanelPayloadItem
} from '@alicloud/console-base-messenger-side-panel';

export interface IMessengerSidePanelPayloadItem extends MessengerSidePanelPayloadItem {}

export interface IMessengerSidePanelPayloadItemWithEvents extends IMessengerSidePanelPayloadItem {
  /**
   * 点击回调
   */
  onClick?(): void;
  /**
   * active 变化时回调，表示按下或松开，需与 active 合起来使用
   */
  onActiveChange?(active: boolean): void;
}

export interface IMessengerSidePanelItemProps {
  item: IMessengerSidePanelPayloadItemWithEvents;
}