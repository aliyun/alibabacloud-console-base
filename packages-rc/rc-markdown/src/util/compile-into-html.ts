import {
  micromark
} from 'micromark';
import {
  Extension,
  HtmlExtension
} from 'micromark-util-types';

import {
  IMarkdownExtension,
  IMarkdownCompileOptions
} from '../types';
import {
  pluginGfm,
  pluginDirective
} from '../plugins';

/**
 * 不需要对编译使用 useMemo 做缓存，我试过，几乎没有影响
 */
export default function compileIntoHtml(source: string, {
  allowDangerousHtml,
  plugins: {
    gfm,
    directive
  } = {},
  extraExtensions,
  processHtml
}: IMarkdownCompileOptions = {}): string {
  const extensions: Extension[] = [];
  const htmlExtensions: HtmlExtension[] = [];
  
  function putExtensions(ex: IMarkdownExtension): void {
    extensions.push(ex.syntax);
    htmlExtensions.push(ex.html);
  }
  
  if (gfm !== false) {
    putExtensions(pluginGfm());
  }
  
  if (directive) {
    putExtensions(pluginDirective(directive));
  }
  
  if (extraExtensions) {
    extraExtensions.forEach(putExtensions);
  }
  
  const html = micromark(source, {
    allowDangerousHtml,
    extensions,
    htmlExtensions
  });
  
  return processHtml ? processHtml(html) : html;
}
