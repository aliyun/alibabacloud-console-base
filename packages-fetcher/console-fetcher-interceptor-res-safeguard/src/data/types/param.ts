export interface IParamsChangeOrderCreate {
  type: 'cm' | 'cf'; // 根据 code 判断
  info: { // 变更信息
    url: string;
    urlBase?: string;
    method: string;
    params?: unknown;
    body?: unknown;
  };
}
