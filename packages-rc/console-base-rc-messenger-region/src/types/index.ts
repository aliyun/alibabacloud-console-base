import {
  MessengerPayloadRegionProps
} from '@alicloud/console-base-messenger-region';

export interface IPropsMessengerRegionEvents {
  onChange?(regionId: string, regionName: string, correctedFrom?: string): void;
}

export interface IPropsMessengerRegion extends MessengerPayloadRegionProps, IPropsMessengerRegionEvents {
  portal?: boolean;
}