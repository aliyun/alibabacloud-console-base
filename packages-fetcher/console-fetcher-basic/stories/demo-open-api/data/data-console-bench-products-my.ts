import callOpenApiWithConsoleBench from './_call-open-api-with-console-bench';

export default function dataConsoleBenchProductsMy(): Promise<unknown> {
  return callOpenApiWithConsoleBench<unknown>('DescribeMyProducts');
}
