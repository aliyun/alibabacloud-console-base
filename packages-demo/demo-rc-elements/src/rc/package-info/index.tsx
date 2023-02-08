import React from 'react';

import {
  IPackageInfoProps
} from '../../types';
import Alert from '../alert';

/**
 * 展示 package.info 信息
 */
export default function PackageInfo({
  info: {
    name,
    version,
    description
  }
}: IPackageInfoProps): JSX.Element {
  return <Alert title={`${name}@${version}`} type="info">
    {description}
  </Alert>;
}