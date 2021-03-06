declare module 'micromark-extension-gfm/html' { // micromark-extension-gfm does NOT link the types...
  import {
    HtmlExtension
  } from 'micromark/dist/shared-types';
  
  const html: HtmlExtension;
  
  export = html;
}
