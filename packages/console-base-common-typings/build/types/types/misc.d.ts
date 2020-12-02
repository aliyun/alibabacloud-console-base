import { ELoading } from '../const';
/**
 * 带加载状态的数据
 */
export interface IDataWithLoading<T> {
    loading: ELoading;
    data: T;
    error?: Error;
}
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
