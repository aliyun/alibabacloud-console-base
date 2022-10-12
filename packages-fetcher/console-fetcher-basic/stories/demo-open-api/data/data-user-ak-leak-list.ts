import {
  fetcher1
} from '../../fetcher';

interface IParams {
  Status: 'pending';
  CurrentPage: 1;
  PageSize: 100;
}

export default function dataUserAkLeakList(): Promise<unknown> {
  return fetcher1.callOpenApi<unknown, IParams>('aegis', 'DescribeAccesskeyLeakList', {
    Status: 'pending',
    CurrentPage: 1,
    PageSize: 100
  });
}
