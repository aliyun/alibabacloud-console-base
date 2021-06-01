import {
  fetcher1
} from '../../fetcher';

interface IParams {
  PageNumber: 1;
  PageSize: 10;
}

export default function dataConsolebenchProductsMy(): Promise<any> {
  return fetcher1.callOpenApi<any, IParams>('consolebench', 'DescribeMyProducts', {
    PageNumber: 1,
    PageSize: 10
  });
}
