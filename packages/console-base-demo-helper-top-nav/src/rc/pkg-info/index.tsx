import React from 'react';

import {
  PackageInfoContent,
  PackageInfo
} from '@alicloud/demo-rc-elements';

import TopNavRightItem from '../top-nav-right-item';

interface IProps {
  info: PackageInfoContent;
}

export default function PkgInfo({
  info
}: IProps): JSX.Element {
  return <TopNavRightItem {...{
    label: 'Package',
    tip: <PackageInfo info={info} />
  }} />;
}
