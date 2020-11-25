import React, { useState, useEffect } from 'react'
import { Table } from '@alicloud/console-components'
import DescribeVpcs from './services/DescribeVpcs'
import styles from './Widget.module.css'

function Widget() {
  const [vpcs, setVpcs] = useState([])

  useEffect(() => {
    DescribeVpcs({
      RegionId: 'cn-hangzhou',
    }).then((data) => {
      setVpcs(data.Vpcs.Vpc)
    })
  }, [])

  return (
    <div className={styles.container}>
      <h1>示例：专有网络 VPC 实例列表</h1>
      <Table dataSource={vpcs}>
        <Table.Column title="ID" dataIndex="VpcId" />
        <Table.Column title="名称" dataIndex="VpcName" />
        <Table.Column title="区域" dataIndex="RegionId" />
        <Table.Column title="状态" dataIndex="Status" />
      </Table>
      <h1>开发文档</h1>
      <p>
        <a
          href="https://csr632.gitee.io/alibabacloud-console-components/guides/concepts"
          target="_blank"
          rel="noopener noreferrer"
        >
          UI 组件库文档：Console-Components
        </a>
      </p>
      <p>
        <a
          href="https://zh-hans.reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          React 开发文档
        </a>
      </p>
      <p>
        <a
          href="https://create-react-app.dev/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App 开发文档
        </a>
      </p>
    </div>
  )
}

export default Widget
