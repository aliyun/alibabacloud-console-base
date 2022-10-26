import {
  MessengerPayloadResourceGroupProps
} from '@alicloud/console-base-messenger-resource-group';

export interface IPropsMessengerResourceGroupEvents {
  /**
   * id 为空串表示「全部资源组」
   */
  onChange?<T>({
    ...arg0
  }: T): void;
}

export interface IPropsMessengerResourceGroup extends MessengerPayloadResourceGroupProps, IPropsMessengerResourceGroupEvents {
  portal?: boolean;
}