import React, {
  useState
} from 'react';

import {
  ArticleBase
} from '@alicloud/console-base-theme-sc-base';
import {
  H1,
  H2,
  Flex,
  InputSwitch,
  CodeViewer
} from '@alicloud/demo-rc-elements';

import Markdown, {
  MarkdownProps,
  MarkdownCompileOptions,
  MarkdownDirective,
  MarkdownExtensionDirectiveHtmlOptions,
  compileIntoHtml
} from '../../src';

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
    console.info(d); // eslint-disable-line no-console
    
    return false;
  }
};

export default function Demo({
  source,
  ...props
}: IProps): JSX.Element {
  const [stateSource, setStateSource] = useState<string>(source);
  const [stateHtmlSource, setStateHtmlSource] = useState<boolean>(false);
  const [stateApplyStyle, setStateApplyStyle] = useState<boolean>(true);
  const [stateAllowDangerousHtml, setStateAllowDangerousHtml] = useState<boolean>(false);
  const [stateGfmEnabled, setStateGfmEnabled] = useState<boolean>(true);
  const [stateDirectiveEnabled, setStateDirectiveEnabled] = useState<boolean>(true);
  const compileOptions: MarkdownCompileOptions = {
    allowDangerousHtml: stateAllowDangerousHtml,
    plugins: {
      gfm: stateGfmEnabled,
      directive: stateDirectiveEnabled ? directiveOptions : undefined
    },
    ...props
  };
  
  const jsxMarkdown = stateHtmlSource ? <CodeViewer {...{
    type: 'html'
  }}>{compileIntoHtml(stateSource, compileOptions)}</CodeViewer> : <Markdown {...{
    source: stateSource,
    ...compileOptions
  }} />;
  
  return <>
    <H1>调戏 <span role="img" aria-label="tx">🙈</span></H1>
    <div>
      <InputSwitch {...{
        label: '展示 HTML 源码',
        value: stateHtmlSource,
        onChange: setStateHtmlSource
      }} />
    </div>
    <div>
      <InputSwitch {...{
        label: '加样式（this component comes with NO style at all... it is for demo only）',
        value: stateApplyStyle,
        onChange: setStateApplyStyle
      }} />
    </div>
    <div>
      <InputSwitch {...{
        label: 'props.allowDangerousHtml',
        value: stateAllowDangerousHtml,
        onChange: setStateAllowDangerousHtml
      }} />
    </div>
    <div>
      <InputSwitch {...{
        label: 'props.plugins.gfm',
        value: stateGfmEnabled,
        onChange: setStateGfmEnabled
      }} />
    </div>
    <div>
      <InputSwitch {...{
        label: 'props.plugins.directive',
        value: stateDirectiveEnabled,
        onChange: setStateDirectiveEnabled
      }} />
    </div>
    <Flex>
      <>
        <H2><span role="img" aria-label="mwa">💋</span> 展示</H2>
        {stateApplyStyle ? <ArticleBase>{jsxMarkdown}</ArticleBase> : jsxMarkdown}
      </>
      <>
        <H2><span role="img" aria-label="code">Ⓜ️</span> 代码</H2>
        <CodeViewer {...{
          conf: {
            readOnly: false
          },
          type: 'markdown',
          onChange: setStateSource
        }}>{stateSource}</CodeViewer>
      </>
    </Flex>
  </>;
}
