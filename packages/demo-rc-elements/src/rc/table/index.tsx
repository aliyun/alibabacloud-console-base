import React, {
  isValidElement
} from 'react';
import styled from 'styled-components';

import {
  ITableProps,
  TTableColumnProps
} from '../../types';
import {
  TABLE_BGC_TD,
  TABLE_BGC_TH,
  TABLE_BDC
} from '../../const';

interface IObjectWithIdOrKey {
  id?: string;
  key?: string;
}

const ScTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  word-wrap: break-word;
  color: inherit;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  tr {
    background-color: ${TABLE_BGC_TD};
  }
  
  thead {
    tr {
      background-color: ${TABLE_BGC_TH};
    }
  }
  
  th,
  td {
    padding: 6px 12px;
    border: 1px solid ${TABLE_BDC};
    font-size: 0.95em;
    text-align: left;
    color: inherit;
    
    &:first-child {
      border-left-width: 0;
      text-align: left;
    }
    
    &:last-child {
      border-right-width: 0;
      text-align: left;
    }
  }
  
  th {
    font-weight: 600;
    
    &[colspan] {
      text-align: center;
    }
  }
`;

function getColumnKey<T>(column: TTableColumnProps<T>, index: number): string | number {
  return column.key ?? (column.title && typeof column.title === 'string' ? column.title : index);
}

function getRowKeyFallback<T>(o: T, index: number): string | number {
  const o2 = o as IObjectWithIdOrKey;
  
  return o2.id ?? o2.key ?? index;
}

function renderCell<T>(o: T, index: number, columnProps: TTableColumnProps<T>): JSX.Element | string | null | undefined {
  if ('renderCell' in columnProps) {
    return columnProps.renderCell(o, index);
  }
  
  if ('dataIndex' in columnProps) {
    const value = o[columnProps.dataIndex];
    
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (value === undefined || value === null) {
      return null;
    }
    
    if (typeof value === 'string' || isValidElement(value)) {
      return value;
    }
    
    return String(value);
  }
  
  return null;
}

function getRowKey<T>(o: T, index: number, primaryKey?: keyof T): string | number {
  const keyDefault = getRowKeyFallback(o, index);
  
  if (!primaryKey) {
    return keyDefault;
  }
  
  const key = o[primaryKey];
  
  return typeof key === 'string' ? key : keyDefault;
}

export default function Table<T>({
  primaryKey,
  dataSource,
  columns,
  ...props
}: ITableProps<T>): JSX.Element {
  return <ScTable {...props}>
    <colgroup>
      {columns.map((v, i) => <col {...{
        key: getColumnKey(v, i),
        style: v.width ? {
          width: v.width
        } : undefined
      }} />)}
    </colgroup>
    <thead>
      <tr>
        {columns.map((v, i) => <th key={getColumnKey(v, i)}>{v.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {(dataSource || []).map((o, i) => <tr key={getRowKey(o, i, primaryKey)}>
        {columns.map((v, ii) => <td key={getColumnKey(v, ii)}>{renderCell(o, ii, v)}</td>)}
      </tr>)}
    </tbody>
  </ScTable>;
}