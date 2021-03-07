export { default } from './rc';

export type {
  IPropsMarkdownPlugins as MarkdownPluginsProps,
  IPropsMarkdown as MarkdownProps
} from './types';

export {
  MicromarkDirectiveOptions as MarkdownDirectiveOptions,
  MicromarkDirectiveHtmlElement as MarkdownDirectiveHtmlElement,
  MicromarkDirectiveHtmlContext
} from 'micromark-extension-directive/html';
