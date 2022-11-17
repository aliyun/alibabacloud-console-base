import {
  FetcherError
} from '@alicloud/fetcher';
import {
  flattenObject
} from '@alicloud/console-logger-sls';

export default function flattenError(err: FetcherError): Record<string, unknown> {
  return flattenObject(err, 'error', {
    ignore: [
      'config',
      'responseData'
    ]
  });
}
