import {
  IApiSuccessOptions
} from '../types';

import armsApi from './arms-api';

export default function armsApiSuccess(url: string, duration: number, options?: IApiSuccessOptions): void {
  armsApi(url, true, duration, options);
}
