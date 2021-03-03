import {
  IFetcherConfig
} from '../types';

const REG_JSONP = /^JSONP$/i;

export default function isJsonp(fetcherConfig: IFetcherConfig): boolean {
  return !!fetcherConfig.method && REG_JSONP.test(fetcherConfig.method);
}
