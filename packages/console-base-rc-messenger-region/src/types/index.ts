import {
  MessengerPayloadRegionProps
} from '@alicloud/console-base-messenger';

export interface IPropsMessengerRegionEvents {
  onChange?(regionId: string, regionName: string, correctedFrom?: string): void;
}

export interface IPropsMessengerRegion extends MessengerPayloadRegionProps, IPropsMessengerRegionEvents {}