import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  H2,
  Hr,
  PropsNCode
} from '@alicloud/demo-rc-elements';

import Button, {
  ButtonSize,
  ButtonTheme,
  ButtonProps
} from '../../src';

const ScButtonThemes = styled(Button)`
  margin: 2px;
`;

const DEFAULT_PROPS = {
  '/component': 'span',
  label: 'button label',
  '/title': true,
  '/href': '//www.aliyun.com',
  '/target': '_top',
  '/disabled': true,
  '/loading': true,
  '/iconLeft': 'x',
  '/iconRight': 'refresh',
  '/iconSpacing': 'small',
  '/theme': ButtonTheme.PRIMARY,
  '/size': ButtonSize.S,
  '/textAlign': 'right',
  '/cursor': 'default',
  '/borderRadius': 'full',
  '/noShadow': true,
  '/block': true,
  '/active': true,
  '/spm': 'spm',
  '/classNameForIconLeft': 'J_IconLeft',
  '/classNameForIconRight': 'J_IconRight'
};

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<ButtonProps>({
    spm: ''
  });
  
  return <>
    <ThemeSwitcher />
    <Hr />
    <Button {...stateProps} />
    <PropsNCode<ButtonProps> {...{
      componentName: 'Button',
      componentPropsName: 'ButtonProps',
      componentPackageName: '@alicloud/console-base-rc-button',
      defaultProps: DEFAULT_PROPS,
      onChange: setStateProps
    }} />
    <H2>All Themes</H2>
    {Object.entries(ButtonTheme).map(([k, v]) => {
      return <ScButtonThemes {...{
        key: k,
        theme: v,
        label: v
      }} />;
    })}
  </>;
}
