import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  H2,
  ComponentTesting
} from '@alicloud/demo-rc-elements';

import Button, {
  ButtonSize,
  ButtonTheme,
  ButtonProps
} from '../../src';
import PkgInfo from '../pkg-info';

const ScButtonThemes = styled(Button)`
  margin: 2px;
`;

const DEFAULT_PROPS = {
  '/component': 'span',
  spm: 'spm',
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
  '/classNameForIconLeft': 'J_IconLeft',
  '/classNameForIconRight': 'J_IconRight'
};

function renderer(props: ButtonProps): JSX.Element {
  return <Button {...props} />;
}

export default function DemoDefault(): JSX.Element {
  const [stateDom, setStateDom] = useState<HTMLElement | null>(null);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <ComponentTesting<ButtonProps> {...{
      componentName: 'Button',
      componentPackageName: '@alicloud/console-base-rc-button',
      defaultProps: DEFAULT_PROPS,
      renderer
    }} />
    <H2>Ref Works Right</H2>
    <Button {...{
      ref: setStateDom,
      label: 'ref shall work right',
      theme: ButtonTheme.PRIMARY,
      onClick() {
        // eslint-disable-next-line no-console
        console.info(stateDom);
      }
    }} />
    <H2>All Themes</H2>
    {Object.entries(ButtonTheme).map(([k, v]) => {
      return <ScButtonThemes {...{
        key: k,
        theme: v,
        label: v
      }} />;
    })}
    <H2>垂直对齐 IconLeft</H2>
    <Button {...{
      iconLeft: ' ',
      textAlign: 'left',
      label: 'icon left NONE'
    }} />
    <br />
    <Button {...{
      iconLeft: 'x',
      textAlign: 'left',
      label: 'icon left x'
    }} />
    <br />
    <Button {...{
      iconLeft: 'check',
      textAlign: 'left',
      label: 'icon left check'
    }} />
    <br />
    <Button {...{
      iconLeft: 'config',
      textAlign: 'left',
      label: 'icon left config'
    }} />
    <H2>垂直对齐 IconRight</H2>
    <Button {...{
      iconRight: 'x',
      label: 'icon left x'
    }} />
    <br />
    <Button {...{
      iconRight: 'check',
      label: 'icon left check'
    }} />
    <br />
    <Button {...{
      iconRight: 'config',
      label: 'icon left config'
    }} />
  </>;
}
