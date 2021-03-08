@alicloud/rc-markdown
===

> Yet another react wrapper of markdown parse based on [micromark].

Plugins built-in:

* [micromark-extension-gfm] - support [GFM] out of the box
* [micromark-extension-directive] - well, you might have to write some code to make it work

Other plugins NOT yet usable.

# WHY 🙈

I used to use [react-markdown], however it has these defects:

1. Its dependency `react-markdown → unified → is-plain-obj` exports only ES6, which I have to make some changes to my webpack config
2. The bug <https://github.com/remarkjs/react-markdown/issues/460> which lives quite a long time makes it impossible to use HTML...
3. I tried to use [remark-directive] plugin, and... it is way too complex...

That's why I have to say goodbye to the [world’s most popular Markdown parser](https://www.npmtrends.com/remark-parse-vs-marked-vs-markdown-it) and say Hi to the [**smallest** CommonMark compliant markdown parser](https://github.com/micromark/micromark).

However, [micromark] has its own problems - the typings are NOT well-defined, I have to do quite a lot of diggings and hacking.

So far so good, cheers 🎉.

# Usage 💥

## Basic

```typescript jsx
import React from 'react';

import Markdown from '@alicloud/rc-markdown';

export default function MyMarkdown(): JSX.Element {
  return <Markdown {...{
    source: __YOUR_MARKDOWN_DOCUMENT_IN_STRING_FORMAT__
  }} />;
}
```

## Use Directive

```typescript jsx
import React from 'react';

import Markdown, {
  MarkdownDirectivePluginOptions,
  MicromarkDirective
} from '@alicloud/rc-markdown';

// remember to make it static, do NOT put it inside render
const directiveOptions: MarkdownDirectivePluginOptions = {
  abbr(d: MicromarkDirective) {
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
  }
};

export default function MyMarkdown(): JSX.Element {
  return <Markdown {...{
    source: __YOUR_MARKDOWN_DOCUMENT_IN_STRING_FORMAT__,
    plugins: {
      directive: directiveOptions
    }
  }} />;
}
```

# Styles? 🔥

This packages ships with styles at all.

Use `@alicloud/console-base-rc-markdown` you want to have a _beautiful_ look (with CSS var).

# Useful Links ✨

* [Markdown](https://daringfireball.net/projects/markdown)
* [CommonMark]
* [Learn Markdown in 16 Seconds](https://commonmark.org/help)
* [Markdown Basic Syntax]
* [Markdown Extended Syntax]
* [micromark]
* [micromark-extension-gfm]
* [micromark-extension-directive]
* [mdast]
* [remark]
* [react-markdown]

[react-markdown]: https://github.com/remarkjs/react-markdown
[remark-directive]: https://github.com/remarkjs/remark-directive
[Markdown Basic Syntax]: https://www.markdownguide.org/basic-syntax
[Markdown Extended Syntax]: https://www.markdownguide.org/extended-syntax
[CommonMark]: https://commonmark.org
[GFM]: https://gith[micromark]ub.github.com/gfm "GitHub Flavored Markdown"
[micromark]: https://github.com/micromark/micromark
[micromark-extension-gfm]: https://github.com/micromark/micromark-extension-gfm
[micromark-extension-directive]: https://github.com/micromark/micromark-extension-directive
[mdast]: https://github.com/syntax-tree/mdast
[remark]: https://github.com/remarkjs/remark
[react-markdown]: https://github.com/remarkjs/react-markdown
