import React, {
  useState
} from 'react';

import {
  ArticleBase
} from '@alicloud/console-base-theme-sc-base';
import {
  H1,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import Markdown from '../../src';

import source from './_source';

export default function DemoDefault(): JSX.Element {
  const [stateAllowDangerousHtml, setStateAllowDangerousHtml] = useState<boolean>(false);
  const [stateApplyStyle, setStateApplyStyle] = useState<boolean>(true);
  const jsxMarkdown = <Markdown {...{
    allowDangerousHtml: stateAllowDangerousHtml,
    source
  }} />;
  
  return <>
    <H1>调戏 <span role="img" aria-label="tx">🙈</span></H1>
    <div>
      allowDangerousHtml: <InputSwitch {...{
        value: stateAllowDangerousHtml,
        onChange: setStateAllowDangerousHtml
      }} />
    </div>
    <div>
      apply style: <InputSwitch {...{
        value: stateApplyStyle,
        onChange: setStateApplyStyle
      }} /> (this component comes with not style at all... it is for demo only)
    </div>
    <H1>展示 <span role="img" aria-label="mwa">💋</span></H1>
    {stateApplyStyle ? <ArticleBase>{jsxMarkdown}</ArticleBase> : jsxMarkdown}
  </>;
}
