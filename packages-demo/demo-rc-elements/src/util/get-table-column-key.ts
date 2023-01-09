import {
  TTableColumnProps
} from '../types';

export default function getTableColumnKey<T>(column: TTableColumnProps<T>, index: number): string | number {
  return column.key ?? (column.title && typeof column.title === 'string' ? column.title : index);
}