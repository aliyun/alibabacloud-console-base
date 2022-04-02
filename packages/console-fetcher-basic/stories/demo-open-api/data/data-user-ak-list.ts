import callOpenApiWithIms from './_call-open-api-with-ims';
import dataUserAkLastUsed from './data-user-ak-last-used';
import fixDate from './_fix-data';

interface IParams {
  UserPrincipalName: string;
}

interface IShittyAk {
  AccessKeyId: string;
  Status: 'Active' | 'Inactive';
  CreateDate: string; // e.g. 2021-03-01T07:30:08Z
  UpdateDate: string; // e.g. 2021-03-01T07:30:08Z
}

interface IShitty {
  AccessKeys: {
    AccessKey: IShittyAk[];
  };
  // RequestId: string;
}

interface IDataUserAk {
  ak: string;
  inactive: boolean;
  timeCreated: Date;
  timeModified: Date | null;
  timeLastUsed: Date | null;
}

export default async function dataUserAkList(upn: string): Promise<IDataUserAk[]> {
  const {
    AccessKeys: {
      AccessKey
    }
  } = await callOpenApiWithIms<IShitty, IParams>('ListAccessKeys', {
    UserPrincipalName: upn
  });
  
  const akList: IDataUserAk[] = AccessKey.map(v => ({
    ak: v.AccessKeyId,
    inactive: v.Status === 'Inactive',
    timeCreated: fixDate(v.CreateDate)!,
    timeModified: fixDate(v.UpdateDate),
    timeLastUsed: null
  }));
  
  // Promise.all 的原则是需要每个接口自己处理自己的错误，以免「颗屎坏锅粥」
  const arr = await Promise.all(akList.map(v => dataUserAkLastUsed(upn, v.ak).catch(() => null)));
  
  akList.forEach((v, i) => {
    v.timeLastUsed = arr[i] || null;
  });
  
  return akList;
}
