import {
  IPagedList
} from '../types';

export default function createPagedList<T>(items: T[] = [], page = 1, total = 0, pageSize = 10): IPagedList<T> {
  return {
    paging: {
      total,
      page,
      pageSize
    },
    items
  };
}
