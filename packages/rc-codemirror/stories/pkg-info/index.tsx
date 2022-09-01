import React from 'react';

import {
  PackageInfo,
  MinimalNormalize
} from '@alicloud/demo-rc-elements';

import pkgInfo from '../../package.json';

export default function PkgInfo(): JSX.Element {
  return <>
    <MinimalNormalize />
    <PackageInfo info={pkgInfo} />
  </>;
}