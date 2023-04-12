import {
  HTMLAttributes
} from 'react';

interface ITableColumnBase {
  key?: string | number;
  title?: JSX.Element | string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
}

export interface ITableColumnWithDataIndex<T> extends ITableColumnBase {
  dataIndex: keyof T;
}

export interface ITableColumnWithRenderCell<T> extends ITableColumnBase {
  renderCell(o: T, valueIndex: number): JSX.Element | string | null | undefined;
}

export type TTableColumnProps<T> = ITableColumnWithDataIndex<T> | ITableColumnWithRenderCell<T>;

export interface ITableProps<T> extends HTMLAttributes<HTMLTableElement> {
  /**
   * 第一列展示为序号
   */
  firstColumnIndex?: boolean;
  primaryKey?: keyof T;
  dataSource: T[];
  columns: TTableColumnProps<T>[];
}