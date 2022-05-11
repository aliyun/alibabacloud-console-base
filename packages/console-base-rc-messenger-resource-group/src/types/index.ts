import {
  MessengerPayloadResourceGroupProps
} from '@alicloud/console-base-messenger';

export interface IPropsMessengerResourceGroupEvents {
  /**
   * id 为空串表示「全部资源组」
   */
  onChange?(id: string, name: string, defaultOne?: boolean): void;
}

export interface IPropsMessengerResourceGroup extends MessengerPayloadResourceGroupProps, IPropsMessengerResourceGroupEvents {}