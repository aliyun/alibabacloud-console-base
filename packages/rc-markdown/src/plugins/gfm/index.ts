import extensionGfm from 'micromark-extension-gfm';
import html from 'micromark-extension-gfm/html';

import {
  IMarkdownPlugin
} from '../../types';

export default function createPlugin(): IMarkdownPlugin {
  return {
    syntax: extensionGfm({
      singleTilde: false
    }),
    html
  };
}
