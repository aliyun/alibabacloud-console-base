declare module 'micromark-extension-directive/html' {
  import {
    Options,
    HtmlExtension
  } from 'micromark/dist/shared-types';
  
  /**
   * https://github.com/micromark/micromark-extension-directive
   * https://github.com/syntax-tree/mdast-util-directive
   * 
   * More about directive syntax here: https://github.com/micromark/micromark-extension-directive#syntax
   * 
   * @examples
   * 
   * ```markdown
   * :::main{#readme}
   * Lorem:br
   * ipsum.
   * 
   * ::hr{.red}
   * 
   * A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.
   * :::
   * ```
   * 
   * ```
   * :br → { type: 'textDirective', name: 'br' }
   * ::hr{.red} → { type: 'leafDirective', name: 'hr', attributes: { class: 'red' } }
   * :i[lovely] → { type: 'textDirective', name: 'i', label: 'lovely' }
   * :abbr[HTML]{title="HyperText Markup Language"} → { type: 'textDirective', name: 'abbr', label: 'HTML', attributes: { title: 'HyperText Markup Language' } }
   * :::main ... → { type: 'containerDirective', name: 'main', attributes: Object { id: 'readme' }, content: '<p>Lorem\nipsum.</p>\n<p>A  language know as .</p>\n', fenceCount: 2 }
   * ```
   */
  interface MicromarkDirectiveBase {
    type: 'textDirective' | 'leafDirective' | 'containerDirective';
    name: string;
    attributes?: Record<string, string>;
  }
  
  // https://stackoverflow.com/questions/55506545/export-assignment-and-exporting-types-in-typescript-ambient-module
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace directiveHtml {
    /**
     * Directives in text can form with a single colon:
     * 
     * :text
     */
    interface MicromarkDirectiveText extends MicromarkDirectiveBase {
      type: 'textDirective';
      label?: string;
    }
    
    /**
     * Leaf (block without content) on its own line
     * 
     * ::leaf
     */
    interface MicromarkDirectiveLeaf extends MicromarkDirectiveBase {
      type: 'leafDirective';
      label?: string;
    }
    
    /**
     * Containers (blocks with content) using three colons:
     * 
     * :::container
     * contents
     * :::
     * 
     * NOTE:
     * 
     * Containers can be nested by using more colons outside:
     * 
     * ::::spoiler
     * He dies.
     * 
     * :::spoiler
     * She is born.
     * :::
     * ::::
     */
    interface MicromarkDirectiveContainer {
      type: 'containerDirective';
      fenceCount: 1 | 2;
      content: string;
    }
    
    type MicromarkDirective = MicromarkDirectiveText | MicromarkDirectiveLeaf | MicromarkDirectiveContainer;
    
    /**
     * micromark/lib/compile/html.mjs 中的 context，但没有被 export 出类型
     */
    interface MicromarkDirectiveHtmlContext {
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
    
    interface MicromarkDirectiveFunc {
      (this: MicromarkDirectiveHtmlContext, el: MicromarkDirective): false | void;
    }
    
    type MicromarkDirectiveExtensionOptions = Record<string, MicromarkDirectiveFunc>;
    
    interface MicromarkExtensionDirectiveHtml {
      (options?: MicromarkDirectiveExtensionOptions): HtmlExtension;
    }
  }
  
  const directiveHtml: directiveHtml.MicromarkExtensionDirectiveHtml;
  
  export = directiveHtml;
}
