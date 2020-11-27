import React from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import Button, {
  EButtonPreset
} from '../../src';

const GlobalStyle = createGlobalStyle`
  a:link {
    color: #e9769b;
    
    &:hover {
      color: #ea8989;
    }
  }
  
  a:visited {
    color: #f50421;
  }
`;

export default function DemoLinkStyle(): JSX.Element {
  return <>
    <Button {...{
      style: {
        fontSize: '3em'
      },
      preset: EButtonPreset.TEXT_LINK,
      href: '//www.aliyun.com',
      spm: 'xx',
      label: 'a link'
    }} />
    <GlobalStyle />
  </>;
}
