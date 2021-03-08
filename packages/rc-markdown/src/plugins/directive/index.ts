import extensionDirective from 'micromark-extension-directive';
import html, {
  MicromarkDirectiveExtensionOptions
} from 'micromark-extension-directive/html';

import {
  IMarkdownPlugin
} from '../../types';

export default function createPlugin(options: MicromarkDirectiveExtensionOptions): IMarkdownPlugin {
  return {
    syntax: extensionDirective(),
    html: html(options)
  };
}
