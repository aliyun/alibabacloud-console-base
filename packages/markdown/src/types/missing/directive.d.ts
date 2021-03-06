declare module 'micromark-extension-directive' {
  import {
    SyntaxExtension
  } from 'micromark/dist/shared-types';
  
  function syntax(): SyntaxExtension;
  
  export = syntax;

}
