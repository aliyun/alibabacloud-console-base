/**
 * 分页数据
 */
export interface IPagedList<T> {
  paging: {
    total: number;
    page: number;
    pageSize: number;
  };
  items: T[];
}
