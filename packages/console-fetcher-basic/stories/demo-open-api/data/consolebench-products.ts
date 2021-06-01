import {
  fetcher1
} from '../../fetcher';

interface IParams {
  PageNumber: 1;
  PageSize: 10;
}

export default function dataConsolebenchProducts(): Promise<any> {
  return fetcher1.callOpenApi<any, IParams>('consolebench', 'DescribeProducts', {
    PageNumber: 1,
    PageSize: 10
  });
}
