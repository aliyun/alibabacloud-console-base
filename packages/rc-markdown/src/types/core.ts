import {
  Extension as MarkdownExtensionSyntax,
  HtmlExtension as MarkdownExtensionHtml
} from 'micromark-util-types';

import {
  MarkdownExtensionDirectiveHtmlOptions
} from './extension-directive';

export type {
  MarkdownExtensionSyntax,
  MarkdownExtensionHtml
};

/**
 * 各个插件的 export 的类型虽然是一致的，但名字一般是 xx + xxHtml，比如：
 *
 * - micromark-extension-gfm → gfm: Extension + gfmHtml: HtmlExtension
 * - micromark-extension-directive → directive: Extension + directiveHtml: HtmlExtension
 * - micromark-extension-frontmatter → frontmatter: Extension + frontmatterHtml: HtmlExtension
 *
 * 这里，主要是用来规范化调用时的插件命名
 */
export interface IMarkdownExtension { // internal use only
  syntax: MarkdownExtensionSyntax;
  html: MarkdownExtensionHtml;
}

export interface IMarkdownPlugins {
  gfm?: boolean;
  directive?: MarkdownExtensionDirectiveHtmlOptions;
}

export interface IMarkdownCompileOptions {
  allowDangerousHtml?: boolean;
  /**
   * predefined extensions
   */
  plugins?: IMarkdownPlugins;
  extraExtensions?: IMarkdownExtension[];
  /**
   * 有时候要插 micromark 的编译过程（写 extension）非常困难...先用它吧
   */
  processHtml?(html: string): string;
}

// TODO compile options as options and make the component article with SC possibility
export interface IPropsMarkdown extends IMarkdownCompileOptions {
  source: string;
}