export { default } from './rc/markdown';

/**
 * 如果想看看编译后的 HTML 长什么样，或者不希望 DOM 再套一层，可以用这个
 */
export {
  compileIntoHtml
} from './util';

export type {
  CompileContext as MarkdownCompileContext,
  Extension as MarkdownExtensionSyntax,
  HtmlExtension as MarkdownExtensionHtml
} from 'micromark-util-types';
export type {
  Options as MarkdownExtensionGfmSyntaxOptions,
  HtmlOptions as MarkdownExtensionGfmHtmlOptions
} from 'micromark-extension-gfm';
export type {
  HtmlOptions as MarkdownExtensionDirectiveHtmlOptions,
  Handle as MarkdownExtensionDirectiveHandle
} from 'micromark-extension-directive';
export type {
  Directive as MarkdownDirective
} from 'micromark-extension-directive/lib/html';

export type {
  IMarkdownProps as MarkdownProps,
  IMarkdownCompileOptions as MarkdownCompileOptions,
  IMarkdownExtension as MarkdownExtension,
  IMarkdownPlugins as MarkdownPlugins
} from './types';
