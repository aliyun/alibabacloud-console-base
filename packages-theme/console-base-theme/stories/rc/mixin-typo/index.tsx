import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import {
  MixinElement
} from '../_mixin-elements';
import {
  mixinTypoFontBase,
  mixinTypoFontFamilyBase,
  mixinTypoFontFamilyBaseJa,
  mixinTypoFontFamilyMono,
  mixinTypoStrong,
  mixinTypoEm,
  mixinTypoSmall,
  mixinTypoCode,
  mixinTypoKbd,
  mixinTypoBlockquote,
  // mixinTypoLineWrap,
  // mixinTypoNoWrap,
  // mixinTypoEllipsis,
  // mixinTypoEllipsisLines,
  mixinTypoElementsInline,
  mixinTypoElementsList
} from '../../../src';

export default function MixinTypo(): JSX.Element {
  return <>
    <H1>Font & FontFamily</H1>
    <MixinElement mixin={mixinTypoFontBase}>FontBase</MixinElement>
    <MixinElement mixin={mixinTypoFontFamilyBase}>FontFamilyBase</MixinElement>
    <MixinElement mixin={mixinTypoFontFamilyBaseJa}>FontFamilyBaseJa</MixinElement>
    <MixinElement mixin={mixinTypoFontFamilyMono}>FontFamilyMono</MixinElement>
    <H1>Inline Elements</H1>
    <MixinElement mixin={mixinTypoStrong} as="strong">strong</MixinElement>
    <MixinElement mixin={mixinTypoEm} as="em">em</MixinElement>
    <MixinElement mixin={mixinTypoSmall} as="small">small</MixinElement>
    <MixinElement mixin={mixinTypoCode} as="code">code</MixinElement>
    <MixinElement mixin={mixinTypoKbd} as="kbd">kbd</MixinElement>
    <H1>Others</H1>
    <MixinElement mixin={mixinTypoBlockquote} as="blockquote">Blockquote</MixinElement>
    <MixinElement mixin={mixinTypoElementsInline}>Some inline elements like <strong>strong</strong> <em>em</em> <small>small</small> <code>code</code> <kbd>kbd</kbd> will have style.</MixinElement>
    <MixinElement mixin={mixinTypoElementsList}>
      <ul>
        <li>list item 1</li>
        <li><p>list item 2</p></li>
      </ul>
      <ol>
        <li>list item 1</li>
        <li><p>list item 2</p></li>
      </ol>
    </MixinElement>
  </>;
}
