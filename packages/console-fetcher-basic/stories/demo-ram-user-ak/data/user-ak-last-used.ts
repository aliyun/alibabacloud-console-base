import {
  fetcher1
} from '../../fetcher';

import fixDate from './_fix-data';

interface IParams {
  UserPrincipalName: string;
  UserAccessKeyId: string;
}

interface IShitty {
  AccessKeyLastUsed: {
    LastUsedDate: string
  };
  // RequestId: string;
}

export default function dataUserAkLastUsed(upn: string, ak: string): Promise<Date | null> {
  return fetcher1.callOpenApi<IShitty, IParams>('ims', 'GetAccessKeyLastUsed', {
    UserPrincipalName: upn,
    UserAccessKeyId: ak
  }).then(shitty => fixDate(shitty.AccessKeyLastUsed.LastUsedDate));
}

