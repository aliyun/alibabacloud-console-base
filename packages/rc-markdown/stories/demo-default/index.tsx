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

import Markdown, {
  MarkdownDirective,
  MarkdownDirectivePluginOptions
} from '../../src';

import source from './_source';

const directiveOptions: MarkdownDirectivePluginOptions = {
  abbr(d: MarkdownDirective) {
    if (d.type !== 'textDirective') {
      return false;
    }

    this.tag('<abbr');

    if (d.attributes && 'title' in d.attributes) {
      this.tag(` title="${this.encode(d.attributes.title)}"`);
    }

    this.tag('>');
    this.raw(d.label || '');
    this.tag('</abbr>');
  },
  '*': function any(d: MarkdownDirective) {
    console.info(d); // for inspection purpose only..
    
    return false;
  }
};

export default function DemoDefault(): JSX.Element {
  const [stateAllowDangerousHtml, setStateAllowDangerousHtml] = useState<boolean>(false);
  const [stateApplyStyle, setStateApplyStyle] = useState<boolean>(true);
  const jsxMarkdown = <Markdown {...{
    source,
    allowDangerousHtml: stateAllowDangerousHtml,
    plugins: {
      directive: directiveOptions
    }
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
