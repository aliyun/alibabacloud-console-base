import {
  gfm,
  gfmHtml
} from 'micromark-extension-gfm';

import {
  IMarkdownExtension
} from '../../types';

export default function pluginGfm(): IMarkdownExtension {
  return {
    syntax: gfm({
      singleTilde: false
    }),
    html: gfmHtml()
  };
}
