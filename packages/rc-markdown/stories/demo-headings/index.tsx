import React from 'react';

import {
  ArticleBase
} from '@alicloud/console-base-theme-sc-base';

import Markdown from '../../src';

const source = `
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

export default function DemoHeadings(): JSX.Element {
  return <ArticleBase>
    <Markdown source={source} />
  </ArticleBase>;
}
