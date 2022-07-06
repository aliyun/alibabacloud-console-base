import {
  HTMLAttributes
} from 'react';

interface ITableColumnBase {
  key?: string | number;
  title?: JSX.Element | string;
  width?: number | string;
}

export interface ITableColumnWithDataIndex<T> extends ITableColumnBase {
  dataIndex: keyof T;
}

export interface ITableColumnWithRenderCell<T> extends ITableColumnBase {
  renderCell(o: T, index: number): JSX.Element | string | null | undefined;
}

export type TTableColumnProps<T> = ITableColumnWithDataIndex<T> | ITableColumnWithRenderCell<T>;

export interface ITableProps<T> extends HTMLAttributes<HTMLTableElement> {
  primaryKey?: keyof T;
  dataSource: T[];
  columns: TTableColumnProps<T>[];
}