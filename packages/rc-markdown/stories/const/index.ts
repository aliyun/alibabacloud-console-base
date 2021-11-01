import markdownCommon from './markdown-common';
import markdownGfm from './markdown-gfm';
import markdownDirective from './markdown-directive';

const APPENDIX_LINK = `# Useful Links

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

[Markdown Basic Syntax]: https://www.markdownguide.org/basic-syntax
[Markdown Extended Syntax]: https://www.markdownguide.org/extended-syntax
[CommonMark]: https://commonmark.org
[GFM]: https://github.github.com/gfm "GitHub Flavored Markdown"
[micromark]: https://github.com/micromark/micromark
[micromark-extension-gfm]: https://github.com/micromark/micromark-extension-gfm
[micromark-extension-directive]: https://github.com/micromark/micromark-extension-directive
[mdast]: https://github.com/syntax-tree/mdast
[remark]: https://github.com/remarkjs/remark
[react-markdown]: https://github.com/remarkjs/react-markdown`;

export const FULL = `${markdownCommon}
${markdownGfm}

${markdownDirective}

${APPENDIX_LINK}`;

export const COMMON = `${markdownCommon}

${APPENDIX_LINK}`;

export const GFM = `${markdownGfm}

${APPENDIX_LINK}`;

export const DIRECTIVE = `${markdownDirective}

${APPENDIX_LINK}`;

// 测试所有的 headings
export const HEADINGS = `
Another demo only for headings.

# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
Heading level 1 - Alt
===
Heading level 2 - Alt
---
`;

export const MATH = `# MATH

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$`;