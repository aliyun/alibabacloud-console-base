import React from 'react';

import {
  ITableProps
} from '../../types';
import {
  getTableColumnKey,
  getTableRowKey,
  renderTableCell
} from '../../util';

import ScTable from './sc-table';

export default function Table<T>({
  dataSource = [],
  primaryKey,
  columns,
  ...props
}: ITableProps<T>): JSX.Element {
  return <ScTable {...props}>
    <colgroup>
      {columns.map((v, i) => <col {...{
        key: getTableColumnKey(v, i),
        style: v.width ? {
          width: v.width
        } : undefined
      }} />)}
    </colgroup>
    <thead>
      <tr>
        {columns.map((v, i) => <th key={getTableColumnKey(v, i)}>{v.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {dataSource.map((o, i) => <tr key={getTableRowKey(o, i, primaryKey)}>
        {columns.map((v, ii) => <td key={getTableColumnKey(v, ii)}>{renderTableCell(o, ii, v)}</td>)}
      </tr>)}
    </tbody>
  </ScTable>;
}