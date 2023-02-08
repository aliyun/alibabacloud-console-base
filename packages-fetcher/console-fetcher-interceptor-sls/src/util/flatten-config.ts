import {
  FetcherConfig
} from '@alicloud/fetcher';
import {
  flattenObject
} from '@alicloud/console-logger-sls';

export default function flattenConfig(fetcherConfig: FetcherConfig): Record<string, unknown> {
  return flattenObject(fetcherConfig, 'config', {
    ignore: [
      'body.collina',
      'body.umid',
      'body.sec_token',
      'body.secToken'
    ]
  });
}
