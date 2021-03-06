declare module 'micromark-extension-directive/html' {
  import {
    HtmlExtension
  } from 'micromark/dist/shared-types';
  
  declare interface DirectiveHtmlOptions {
    // TODO
  }
  
  declare function createHtmlExtension(options?: DirectiveHtmlOptions): HtmlExtension
  
  export = createHtmlExtension;
}
