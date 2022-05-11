import React from 'react';
import styled from 'styled-components';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useProps
} from '../../../model';

const ScCustom = styled(Flex)`
  flex: 1;
`;
const ScCustomL = styled(ScCustom)`
  margin-right: 12px;
  
  /* stylelint-disable selector-max-universal */
  > * {
    margin-left: 12px;
  }
`;
const ScCustomR = styled(ScCustom)`
  > * {
    margin-right: 12px;
  }
`;

/**
 * 自定义区域
 * 
 * 有默认的 margin，可以用 customLeftClassName 和 customRightClassName 覆盖
 */
export default function Custom(): JSX.Element {
  const {
    customLeft,
    customRight,
    customLeftClassName,
    customRightClassName
  } = useProps();
  
  return <ScCustom align="center">
    <ScCustomL {...{
      className: customLeftClassName,
      align: 'center',
      justify: 'flex-start'
    }}>{customLeft}</ScCustomL>
    <ScCustomR {...{
      className: customRightClassName,
      align: 'center',
      justify: 'flex-end'
    }}>{customRight}</ScCustomR>
  </ScCustom>;
}
