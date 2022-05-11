import callOpenApiWithIms from './_call-open-api-with-ims';
import fixDate from './_fix-data';

interface IParams {
  UserPrincipalName: string;
  UserAccessKeyId: string;
}

interface IShitty {
  AccessKeyLastUsed: {
    LastUsedDate: string;
  };
  // RequestId: string;
}

export default function dataUserAkLastUsed(upn: string, ak: string): Promise<Date | null> {
  return callOpenApiWithIms<IShitty, IParams>('GetAccessKeyLastUsed', {
    UserPrincipalName: upn,
    UserAccessKeyId: ak
  }).then(shitty => fixDate(shitty.AccessKeyLastUsed.LastUsedDate));
}