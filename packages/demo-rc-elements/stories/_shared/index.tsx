import React, {
  useState,
  useEffect
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  MinimalNormalize,
  PackageInfo,
  InputSwitch
} from '../../src';
import pkgInfo from '../../package.json';

const CLASS_THEME_DARK = 'theme-dark';

const DarkStyle = createGlobalStyle`
  html {
    background-color: #333;
    color: #fff;
  }
`;

export default function Shared(): JSX.Element {
  const [stateDark, setStateDark] = useState(false);
  
  useEffect(() => {
    if (stateDark) {
      document.documentElement.classList.add(CLASS_THEME_DARK);
    }
    
    return () => document.documentElement.classList.remove(CLASS_THEME_DARK);
  }, [stateDark]);
  
  return <>
    <MinimalNormalize />
    <PackageInfo info={pkgInfo} />
    <InputSwitch {...{
      label: '暗夜模式',
      value: stateDark,
      onChange: setStateDark
    }} />
    {stateDark ? <DarkStyle /> : null}
  </>;
}