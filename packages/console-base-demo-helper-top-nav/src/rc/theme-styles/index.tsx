import React, {
  useState,
  useCallback
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  mixinTypoFontBase
} from '@alicloud/console-base-theme';
import {
  RainbowText
} from '@alicloud/demo-rc-elements';
import {
  TopNavButton
} from '@alicloud/console-base-rc-top-nav';

import intl from '../../intl';
import TopNavRightItem from '../top-nav-right-item';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 12px;
    ${mixinTypoFontBase}
  }
  
  a:link {
    color: #369;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  a:visited {
    color: #63f;
  }
`;

export default function ThemeStyles(): JSX.Element {
  const [stateOn, setStateOn] = useState<boolean>(true);
  const handleToggle = useCallback(() => setStateOn(!stateOn), [stateOn, setStateOn]);
  
  return <>
    <TopNavRightItem {...{
      label: <TopNavButton {...{
        spm: 'theme-styles',
        label: stateOn ? <RainbowText>{intl('theme:label:styles')}</RainbowText> : <strong>{intl('theme:label:styles')}</strong>,
        onClick: handleToggle
      }} />,
      tip: intl(stateOn ? 'theme:message:styles_clear!html!lines' : 'theme:message:styles!html!lines')
    }} />
    {stateOn ? <>
      <GlobalStyle />
    </> : null}
  </>;
}
