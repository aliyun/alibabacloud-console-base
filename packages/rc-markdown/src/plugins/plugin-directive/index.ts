import {
  directive,
  directiveHtml,
  HtmlOptions
} from 'micromark-extension-directive';

import {
  IMarkdownExtension
} from '../../types';

export default function pluginDirective(options: HtmlOptions): IMarkdownExtension {
  return {
    syntax: directive(),
    html: directiveHtml(options)
  };
}
