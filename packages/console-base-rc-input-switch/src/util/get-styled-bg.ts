import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinBgHelp,
  mixinBgSuccess,
  mixinBgDisabled
} from '@alicloud/console-base-theme';

interface IScProps {
  'aria-checked': boolean;
  disabled?: boolean;
}

export default function getStyledBg(props: IScProps): FlattenSimpleInterpolation {
  if (props.disabled) {
    return mixinBgDisabled;
  }
  
  return props['aria-checked'] ? mixinBgSuccess : mixinBgHelp; // TODO 更好的定义
}