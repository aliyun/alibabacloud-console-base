import extensionDirective from 'micromark-extension-directive';
import html, {
  MicromarkDirectiveOptions
} from 'micromark-extension-directive/html';

import {
  IMarkdownPlugin
} from '../../types';

export default function createPlugin(options: MicromarkDirectiveOptions): IMarkdownPlugin {
  return {
    syntax: extensionDirective(),
    html: html(options)
  };
}
