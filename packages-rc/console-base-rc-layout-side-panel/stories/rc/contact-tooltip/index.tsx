import React from 'react';

import {
  Table
} from '@alicloud/demo-rc-elements';

interface IDemoAccountItem {
  title: string;
  description: string;
}

const dataSourceAccount: IDemoAccountItem[] = [{
  title: '售前在线咨询',
  description: '专属商务经理在线解答'
}, {
  title: '售后在线服务',
  description: '在线实时沟通，快速解决您的问题'
}, {
  title: '聆听·建议反馈',
  description: '阿里云不是完美的，我们渴望您的建议'
}, {
  title: '分享当前页面',
  description: '生成页面分享链接并复制到剪贴板'
}];

export default function ContactTooltip(): JSX.Element {
  return <Table<IDemoAccountItem> {...{
    dataSource: dataSourceAccount,
    columns: [{
      title: '标题',
      dataIndex: 'title'
    }, {
      title: '描述',
      dataIndex: 'description'
    }]
  }} />;
}
