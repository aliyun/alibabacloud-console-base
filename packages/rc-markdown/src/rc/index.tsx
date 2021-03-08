import React from 'react';
import micromark from 'micromark';
import {
  SyntaxExtension,
  HtmlExtension
} from 'micromark/dist/shared-types';

import {
  IPropsMarkdown
} from '../types';
import {
  gfm,
  directive
} from '../plugins';

export default function Rc({
  source,
  allowDangerousHtml,
  plugins = {}
}: IPropsMarkdown): JSX.Element | null {
  if (!source) {
    return null;
  }
  
  const extensions: SyntaxExtension[] = [];
  const htmlExtensions: HtmlExtension[] = [];
  
  if (plugins.gfm !== false) {
    const pluginGfm = gfm();
    
    extensions.push(pluginGfm.syntax);
    htmlExtensions.push(pluginGfm.html);
  }
  
  if (plugins.directive) {
    const pluginDirective = directive(plugins.directive);
    
    extensions.push(pluginDirective.syntax);
    htmlExtensions.push(pluginDirective.html);
  }
  
  const html = micromark(source, {
    allowDangerousHtml,
    extensions,
    htmlExtensions
  });
  
  return <div {...{
    dangerouslySetInnerHTML: {
      __html: html
    }
  }} />;
}
