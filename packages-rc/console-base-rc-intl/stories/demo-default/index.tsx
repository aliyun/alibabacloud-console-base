import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  H2
} from '@alicloud/demo-rc-elements';

import Intl from '../../src';
import PkgInfo from '../pkg-info';

const TEXT_SIMPLE_WITH_HTML = '文案中允许的 inline 元素：<code>em</code>、<code>strong</code>、<code>small</code>、<code>code</code>、<code>kbd</code>';
const TEXT_HTML_LINES = `国际化应该有它标准的样式输出。
inline 元素：
* 利用 <em>em</em> 着重标注
* 利用 <strong>strong</strong> 加粗标重
* 利用 <small>small</small> 表示不重要
* 利用 <code>code</code> 输出代码
* 利用 <kbd>kbd</kbd> 展示键盘
block 元素：p、ul、ol、hr（用三个短横线，效果如下）
---
国际化既不能断句，也不能 <strong>断章</strong>。
使用配置项 <code>lines</code>（可以和 <code>html</code> 并用），就可以自动按文案的原始换行渲染出 <code>p</code>、<code>ul</code>或 <code>ol</code>。
无序列表 UL 用 <code>*</code> 开头：
* 无序列表
* 无序列表
有序列表 OL 用 数字加 <code>.</code> 开头：
1. 有序列表
2. 有序列表
过于复杂的 HTML 文案，从设计上就应该杜绝。`;

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H2>单行纯文本</H2>
    <Intl {...{
      text: TEXT_SIMPLE_WITH_HTML
    }} />
    <H2>单行 HTML</H2>
    <Intl {...{
      text: TEXT_SIMPLE_WITH_HTML,
      html: true
    }} />
    <H2>多行纯文本</H2>
    <Intl {...{
      text: TEXT_HTML_LINES,
      lines: true
    }} />
    <H2>多行 HTML</H2>
    <Intl {...{
      text: TEXT_HTML_LINES,
      html: true,
      lines: true
    }} />
  </>;
}
