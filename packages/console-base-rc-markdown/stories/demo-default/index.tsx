import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Markdown from '../../src';

const markdownString = `this is a markdown
---

Changes are automatically rendered as you type.
---

![](https://img.alicdn.com/imgextra/i1/3265150369/O1CN01PAoVC11Eb2ijNXVoZ_!!3265150369.jpg)

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

1. Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
2. Renders actual, "native" **React DOM** elements
3. Allows you to escape or skip HTML (try toggling the checkboxes above)
4. If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## inline elements

* **strong**
* *em1* _em2_
* [link](https://www.aliyun.com)

## HTML block below

> fuck you

<blockquote>需要设置 \`allowDangerousHtml\` 才会被渲染成真正的 blockquote</blockquote>

## How about some code?

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

# GFM

需要插件 [remark-gfm]，已安装

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

Feature | Name | Support | Op
:-- | -- | :-: | --:
tables | tables | ✔ | delete
alignment | alignment | ✔ | delete
wewt | wewt | ✔ | delete

## TODO list

* [ ] to do
* [x] done

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)

[remark-gfm]: https://github.com/remarkjs/remark-gfm`;

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <Markdown>
      {markdownString}
    </Markdown>
  </>;
}
