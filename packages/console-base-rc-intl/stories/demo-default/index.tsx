import React from 'react';
import {
  text,
  boolean
} from '@storybook/addon-knobs';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Intl from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const textValue = text('text', `国际化应该有它标准的样式输出。
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
过于复杂的 HTML 文案，从设计上就应该杜绝。`) // 这里应该是 knob 的一个 bug（或 feature）它转义了...
      .replace(/&gt;/gi, '>')
      .replace(/&lt;/gi, '<')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/&amp;/gi, '&');
  const html = boolean('html', true);
  const lines = boolean('lines', true);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Intl {...{
      text: textValue,
      html,
      lines
    }} />
  </>;
}
