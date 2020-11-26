import {
  IFetcherConfig
} from '../types';

const REG_JSONP = /^JSONP$/i;

export default function isJsonp(config: IFetcherConfig): boolean {
  return REG_JSONP.test(config.method);
}
