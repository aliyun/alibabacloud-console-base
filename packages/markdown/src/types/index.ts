import {
  SyntaxExtension,
  HtmlExtension
} from 'micromark/dist/shared-types';
import {
  MicromarkDirectiveOptions
} from 'micromark-extension-directive/html';

import './missing/gfm-html';
import './missing/directive';
import './missing/directive-html';

export interface IMarkdownPlugin { // internal use only
  syntax: SyntaxExtension;
  html: HtmlExtension;
}

export interface IPropsMarkdownPlugins {
  gfm?: boolean;
  directive?: MicromarkDirectiveOptions;
}

export interface IPropsMarkdown {
  source: string;
  allowDangerousHtml?: boolean;
  plugins?: IPropsMarkdownPlugins;
}
