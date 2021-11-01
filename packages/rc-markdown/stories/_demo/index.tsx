import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  ArticleBase
} from '@alicloud/console-base-theme-sc-base';
import {
  H1,
  H2,
  InputSwitch,
  CodeViewer
} from '@alicloud/demo-rc-elements';

import Markdown, {
  MarkdownProps,
  MarkdownDirective,
  MarkdownExtensionDirectiveHtmlOptions
} from '../../src';

const ScViewAndCode = styled.div`
  display: flex;
`;
const ScViewAndCodeContent = styled.div`
  flex: 1;
`;

interface IProps extends Omit<MarkdownProps, 'allowDangerousHtml' | 'plugins'> {}

const directiveOptions: MarkdownExtensionDirectiveHtmlOptions = {
  /**
   * 支持 :abbr
   */
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

export default function Demo({
  source,
  ...props
}: IProps): JSX.Element {
  const [stateSource, setStateSource] = useState<string>(source);
  const [stateApplyStyle, setStateApplyStyle] = useState<boolean>(true);
  const [stateAllowDangerousHtml, setStateAllowDangerousHtml] = useState<boolean>(false);
  const [stateGfmEnabled, setStateGfmEnabled] = useState<boolean>(true);
  const [stateDirectiveEnabled, setStateDirectiveEnabled] = useState<boolean>(true);
  const jsxMarkdown = <Markdown {...{
    source: stateSource,
    allowDangerousHtml: stateAllowDangerousHtml,
    plugins: {
      gfm: stateGfmEnabled,
      directive: stateDirectiveEnabled ? directiveOptions : undefined
    },
    ...props
  }} />;
  
  return <>
    <H1>调戏 <span role="img" aria-label="tx">🙈</span></H1>
    <div>
      apply style:
      <InputSwitch {...{
        value: stateApplyStyle,
        onChange: setStateApplyStyle
      }} /> (this component comes with NO style at all... it is for demo only)
    </div>
    <div>
      props.allowDangerousHtml:
      <InputSwitch {...{
        value: stateAllowDangerousHtml,
        onChange: setStateAllowDangerousHtml
      }} />
    </div>
    <div>
      props.plugins.gfm:
      <InputSwitch {...{
        value: stateGfmEnabled,
        onChange: setStateGfmEnabled
      }} />
    </div>
    <div>
      props.plugins.directive:
      <InputSwitch {...{
        value: stateDirectiveEnabled,
        onChange: setStateDirectiveEnabled
      }} />
    </div>
    <ScViewAndCode>
      <ScViewAndCodeContent>
        <H2><span role="img" aria-label="mwa">💋</span> 展示</H2>
        {stateApplyStyle ? <ArticleBase>{jsxMarkdown}</ArticleBase> : jsxMarkdown}
      </ScViewAndCodeContent>
      <ScViewAndCodeContent>
        <H2><span role="img" aria-label="code">Ⓜ️</span> 代码</H2>
        <CodeViewer {...{
          conf: {
            readOnly: false
          },
          type: 'markdown',
          onChange: setStateSource
        }}>{stateSource}</CodeViewer>
      </ScViewAndCodeContent>
    </ScViewAndCode>
  </>;
}
