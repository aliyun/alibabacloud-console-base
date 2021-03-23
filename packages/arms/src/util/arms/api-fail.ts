import {
  IApiFailOptions
} from '../../types';

import api from './api';

export default function apiFail(url: string, duration: number, options?: IApiFailOptions): void {
  api(url, false, duration, options);
}
