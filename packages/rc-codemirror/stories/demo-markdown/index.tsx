import React, {
  useState
} from 'react';

import CodeMirror from '../../src';

const TEXT = `## Headings

\`\`\`markdown
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
\`\`\`

# Paragraph

this will automatically be a paragraph...

# List

Use leading \`n.\` to create an ordered list (number is not important..).  
Use leading \`*\` → \`-\` → \`+\` to create an unordered list.

Ordered

1. First item
2. Second item
3. Third item
4. Fourth item

Unordered

* First item
* Second item
* Third item
* Fourth item

Nested

* First item
  1. First of first
  2. Second of first
* Second item
  - First of second
    + dd
  - Second of second
* Third item
* Fourth item

Best practice:

1. Always use sequenced numbers although they matter not.
2. Use \`*\` → \`-\` → \`+\` in order when nested, never mix in the same level.

# Blockquote

Use a leading \`>\` before a paragraph will generate a blockquote.

> Dorothy followed her through many of the beautiful rooms in her castle.

Blockquotes with Multiple Paragraphs

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

Nested Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

# Br

End a line with trailing 2+ spaces  
will create a \`<br />\`.

# Link

* \`[text](href)\` → [github](https://github.com)
* \`[text](href "title")\` → [github](https://github.com "the almighty github")
* \`<href>\` → <https://github.com>
* Or Reference [micromark]

## Emphasis Inline Elements

\`\`\`markdown
You can add **strong** or _em_ or **_strong and em_** in your content.

You can add __strong__ or *em* or _**strong and em**_ in your content.
\`\`\`

You can add **strong** or _em_ or **_strong and em_** in your content.

You can add __strong__ or *em* or _**strong and em**_ in your content.

> I will recommend using \`**\` for \`strong\`. and \`_\` for \`em\`, keep consistency.

## Code

1 backtick: \`inline code\`

2 backticks - backticks inside auto escaped:

\`\`Use \`code\` in your Markdown file.\`\`

3 backticks - code block:

\`\`\`js
import React from 'react';

import Markdown from '@alicloud/rc-markdown';

React.render(<Markdown source="# Your markdown here" />, document.getElementById('content'));
\`\`\``;

export default function DemoHtml(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(TEXT);
  
  return <CodeMirror {...{
    conf: {
      mode: 'text/markdown'
    },
    value: stateValue,
    onChange: setStateValue
  }} />;
}
