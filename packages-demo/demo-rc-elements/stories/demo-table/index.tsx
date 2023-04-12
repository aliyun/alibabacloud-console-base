import React from 'react';

import {
  Table,
  TableColumnProps
} from '../../src';
import Shared from '../_shared';

interface IData {
  id: string;
  name: string;
}

const columns: TableColumnProps<IData>[] = [{
  title: 'ID',
  dataIndex: 'id',
  width: '25%'
}, {
  title: '名称',
  dataIndex: 'name'
}, {
  title: '操作',
  align: 'right',
  renderCell(): JSX.Element {
    return <span>操作 Placeholder</span>;
  }
}];

const dataSource: IData[] = [{
  id: 'ID-1',
  name: '名称 - 1'
}, {
  id: 'ID-2',
  name: '名称 - 2'
}];

export default function DemoTable(): JSX.Element {
  return <>
    <Shared />
    <Table<IData> {...{
      dataSource,
      columns
    }} />
  </>;
}