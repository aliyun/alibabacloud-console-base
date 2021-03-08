declare module 'micromark-extension-directive/html' {
  import {
    Options,
    HtmlExtension
  } from 'micromark/dist/shared-types';
  
  /**
   * micromark/lib/compile/html.mjs 中的 context，但没有被 export 出类型
   */
  export interface MicromarkDirectiveHtmlContext {
    /**
     * micromark options pass-down
     */
    options: Options;
    /**
     * Output an extra line ending if the previous value wasn't EOF/EOL
     */
    lineEndingIfNeeded(): void;
    /**
     * Make a value safe for injection in HTML (except w/ `ignoreEncode`)
     */
    encode(str: string): string;
    /**
     * Output raw data
     */
    raw(str: string): void;
    /**
     * Output (parts of) HTML tags
     */
    tag(str: string): void;
    /**
     * Capture some of the output data
     */
    buffer(): void;
    /**
     * Stop capturing and access the output data
     */
    resume(): void;
    /**
     * Set data into the key-value store
     */
    setData(key: string, value: string | number | boolean): void;
    /**
     * Get data from the key-value store
     */
    getData(key: string): string;
  }
  
  export interface MicromarkDirectiveHtmlElement {
    attributes: Record<string, string>;
    label: 'HTML';
    name: string;
    type: 'textDirective';
  }
  
  export type MicromarkDirectiveOptions = ThisType<MicromarkDirectiveHtmlContext> & {
    [tag](el: MicromarkDirectiveHtmlElement): false | void;
  };
  
  declare function createHtmlExtension(options?: MicromarkDirectiveOptions): HtmlExtension;
  
  export = createHtmlExtension;
}
