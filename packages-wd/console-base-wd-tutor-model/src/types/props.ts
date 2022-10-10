import {
  MessengerPayloadTutorRegister
} from '@alicloud/console-base-messenger-tutor';
import {
  FactoryOptions
} from '@alicloud/console-logger-sls';

import {
  IModelApis
} from './common';

export interface IModelProps {
  apis: IModelApis;
  slsOptions?: FactoryOptions;
  visible?: boolean;
  registerLegacy?: Record<string, MessengerPayloadTutorRegister>; // TODO 等 SMC 改掉...
  onOpen?(id: string, step: number): void;
  onClose?(): void;
}