import React from 'react';

import {
  PackageInfo
} from '@alicloud/demo-rc-elements';

import pkgInfo from '../../package.json';

export default function PkgInfo(): JSX.Element {
  return <PackageInfo info={pkgInfo} />;
}