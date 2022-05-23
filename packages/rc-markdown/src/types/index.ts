import {
  Extension,
  HtmlExtension
} from 'micromark-util-types';
import {
  HtmlOptions as DirectiveHtmlOptions
} from 'micromark-extension-directive';

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
  syntax: Extension;
  html: HtmlExtension;
}

export interface IMarkdownPlugins {
  gfm?: boolean;
  directive?: DirectiveHtmlOptions;
}

export interface IMarkdownCompileOptions {
  allowDangerousHtml?: boolean;
  /**
   * predefined extensions
   */
  plugins?: IMarkdownPlugins;
  extraExtensions?: IMarkdownExtension[];
  /**
   * 写 extension 非常困难，所以有的时候，可以用简单的 DOM 处理来解决一些 HTML 预处理的问题
   */
  processHtml?(html: string): string;
}

export interface IPropsMarkdown extends IMarkdownCompileOptions {
  source: string;
}