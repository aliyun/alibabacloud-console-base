export { default } from './rc/markdown';

/**
 * 如果想看看编译后的 HTML 长什么样，或者不希望 DOM 再套一层，可以用这个
 */
export {
  compileIntoHtml
} from './util';

export type {
  IPropsMarkdown as MarkdownProps,
  IMarkdownCompileOptions as MarkdownCompileOptions,
  IMarkdownExtension as MarkdownExtension,
  IMarkdownPlugins as MarkdownPlugins,
  MarkdownDirective,
  MarkdownExtensionDirectiveHandle,
  MarkdownExtensionDirectiveHtmlOptions
} from './types';
