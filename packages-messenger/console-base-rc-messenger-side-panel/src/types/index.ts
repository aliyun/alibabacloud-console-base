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
   * 按下回调
   */
  onActiveChange?(active: boolean): void;
}

export interface IMessengerSidePanelItemProps {
  item: IMessengerSidePanelPayloadItemWithEvents;
}