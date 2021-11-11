export { default } from './rc/markdown';
/**
 * 如果想看看编译后的 HTML 长什么样，可以用这个
 */
export { default as compileIntoHtml } from './util/compile-into-html';

export type {
  IPropsMarkdown as MarkdownProps,
  IMarkdownCompileOptions as MarkdownCompileOptions,
  IMarkdownExtension as MarkdownExtension,
  IMarkdownPlugins as MarkdownPlugins,
  MarkdownDirective,
  MarkdownExtensionDirectiveHandle,
  MarkdownExtensionDirectiveHtmlOptions
} from './types';
