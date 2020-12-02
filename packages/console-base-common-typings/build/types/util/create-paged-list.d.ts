import { IPagedList } from '../types';
export default function createPagedList<T>(items?: T[], page?: number, total?: number, pageSize?: number): IPagedList<T>;
