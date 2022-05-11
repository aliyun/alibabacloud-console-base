import {
  IApiFailOptions
} from '../types';

import armsApi from './arms-api';

export default function armsApiFail(url: string, duration: number, options?: IApiFailOptions): void {
  armsApi(url, false, duration, options);
}
