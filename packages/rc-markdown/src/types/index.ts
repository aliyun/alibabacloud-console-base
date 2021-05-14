import {
  SyntaxExtension,
  HtmlExtension
} from 'micromark/dist/shared-types';
import {
  MicromarkDirective,
  MicromarkDirectiveText,
  MicromarkDirectiveLeaf,
  MicromarkDirectiveContainer,
  MicromarkDirectiveExtensionOptions,
  MicromarkDirectiveHtmlContext
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
  directive?: MicromarkDirectiveExtensionOptions;
}

export interface IPropsMarkdown {
  source: string;
  allowDangerousHtml?: boolean;
  plugins?: IPropsMarkdownPlugins;
}

export type {
  MicromarkDirective as MarkdownDirective,
  MicromarkDirectiveText as MarkdownDirectiveText,
  MicromarkDirectiveLeaf as MarkdownDirectiveLeaf,
  MicromarkDirectiveContainer as MarkdownDirectiveContainer,
  MicromarkDirectiveExtensionOptions as MarkdownDirectivePluginOptions,
  MicromarkDirectiveHtmlContext as MarkdownDirectivePluginContext
};
