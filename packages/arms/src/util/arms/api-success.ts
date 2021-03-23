import {
  IApiSuccessOptions
} from '../../types';

import api from './api';

export default function apiSuccess(url: string, duration: number, options?: IApiSuccessOptions): void {
  api(url, true, duration, options);
}
