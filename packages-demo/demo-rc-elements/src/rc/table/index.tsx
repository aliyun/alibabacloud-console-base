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
  firstColumnIndex = true,
  dataSource = [],
  primaryKey,
  columns,
  ...props
}: ITableProps<T>): JSX.Element {
  return <ScTable {...props}>
    <colgroup>
      {firstColumnIndex ? <col style={{
        width: 64
      }} /> : null}
      {columns.map((v, i) => <col {...{
        key: getTableColumnKey(v, i),
        style: v.width ? {
          width: v.width
        } : undefined
      }} />)}
    </colgroup>
    <thead>
      <tr>
        {firstColumnIndex ? <th align="right">#</th> : null}
        {columns.map((v, i) => <th key={getTableColumnKey(v, i)} align={v.align}>{v.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {dataSource.map((o, valueIndex) => <tr key={getTableRowKey(o, valueIndex, primaryKey)}>
        {firstColumnIndex ? <td align="right">{valueIndex + 1}</td> : null}
        {columns.map((v, columnIndex) => <td key={getTableColumnKey(v, columnIndex)} align={v.align}>{renderTableCell(o, valueIndex, v)}</td>)}
      </tr>)}
    </tbody>
  </ScTable>;
}