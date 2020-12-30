import {
  css
} from 'styled-components';

import {
  mixinTextSecondary
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../types';
import {
  EButtonSize
} from '../const';

// 按钮通用样式，没有 Size 的时候不设边框
export default css<IButtonPropsForSc>`
  display: inline-block;
  border: ${props => (props.size === EButtonSize.NONE ? 'none' : '1px solid transparent')};
  overflow: hidden;
  vertical-align: middle;
  text-align: ${props => props.textAlign || 'center'};
  ${mixinTextSecondary};
`;
