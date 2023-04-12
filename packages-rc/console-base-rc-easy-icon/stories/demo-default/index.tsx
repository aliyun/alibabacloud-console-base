import React, {
  useState
} from 'react';

import {
  RadioGroup
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import './index.less';

import EasyIcon from '../../src';
import PkgInfo from '../pkg-info';
import {
  ICON_TYPES
} from '../const';
import {
  getIconType
} from '../util';

export default function DemoAll(): JSX.Element {
  const [stateType, setStateType] = useState('');
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <RadioGroup {...{
      value: stateType,
      onChange: setStateType,
      items: ICON_TYPES
    }} />
    <EasyIcon icon={getIconType(stateType)} />
  </>;
}
