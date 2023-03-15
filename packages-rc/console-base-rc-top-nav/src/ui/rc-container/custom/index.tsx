import React from 'react';
import styled from 'styled-components';

import Flex from '@alicloud/console-base-rc-flex';

import {
  DATA_ATTR_KEY_CUSTOM_L,
  DATA_ATTR_KEY_CUSTOM_R
} from '../../const';
import {
  useProps
} from '../../../model';

const ScCustom = styled(Flex)`
  flex: 1;
  height: 100%;
`;
const ScCustomL = styled(Flex)`
  margin-right: 12px;
  height: 100%;
  
  /* stylelint-disable selector-max-universal */
  > * {
    margin-right: 12px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;
const ScCustomR = styled(Flex)`
  margin-right: 12px;
  height: 100%;
  
  > * {
    margin-left: 12px;
    
    &:first-child {
      margin-left: 0;
    }
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
  
  return <ScCustom align="center" justify="space-between">
    <ScCustomL {...{
      className: customLeftClassName,
      align: 'center',
      justify: 'flex-start',
      [DATA_ATTR_KEY_CUSTOM_L]: ''
    }}>{customLeft}</ScCustomL>
    <ScCustomR {...{
      className: customRightClassName,
      align: 'center',
      justify: 'flex-end',
      [DATA_ATTR_KEY_CUSTOM_R]: ''
    }}>{customRight}</ScCustomR>
  </ScCustom>;
}
