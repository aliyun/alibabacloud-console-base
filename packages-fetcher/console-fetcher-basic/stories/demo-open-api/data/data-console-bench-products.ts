import callOpenApiWithConsoleBench from './_call-open-api-with-console-bench';

interface IParams {
  PageNumber: 1;
  PageSize: 10;
}

export default function dataConsoleBenchProducts(): Promise<unknown> {
  return callOpenApiWithConsoleBench<unknown, IParams>('DescribeProducts', {
    PageNumber: 1,
    PageSize: 10
  });
}