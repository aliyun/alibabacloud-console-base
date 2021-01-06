import React, {
  useState,
  useCallback
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import Button, {
  ButtonProps
} from '../../src';
import Knobs from '../knobs';

const GlobalStyle = createGlobalStyle`
  a:link {
    color: #9eff70;
  }
  
  a:visited {
    color: #ff10f2;
  }
`;

export default function DemoDefault(): JSX.Element {
  const [stateInjectGlobalStyle, setStateInjectGlobalStyle] = useState<boolean>(false);
  const [stateProps, setStateProps] = useState<ButtonProps>({
    spm: ''
  });
  
  const handleToggleInjectGlobalStyle = useCallback(() => setStateInjectGlobalStyle(!stateInjectGlobalStyle), [stateInjectGlobalStyle, setStateInjectGlobalStyle]);
  
  return <>
    <ThemeSwitcher />
    <Knobs onChange={setStateProps} />
    <H1>Button 测试</H1>
    <P>请使用 knobs 进行调戏 <span role="img" aria-label="play">🙈</span>，通过注入全局样式测试 <code>:link</code> <code>:visited</code> 对链接按钮样式的干扰</P>
    {stateInjectGlobalStyle ? <GlobalStyle /> : null}
    <Button {...{
      spm: 'x',
      onClick: handleToggleInjectGlobalStyle,
      label: `inject global from ${stateInjectGlobalStyle} to ${!stateInjectGlobalStyle}`
    }} />
    <div>text around <Button {...stateProps} /> button <Button {...{
      ...stateProps,
      href: '//www.aliyun.com',
      label: 'this button will stay an anchor'
    }}>www.aliyun.com</Button></div>
  </>;
}
