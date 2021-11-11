import {
  HtmlExtension
} from 'micromark-util-types';

import {
  VARIABLE_TYPES
} from './const';

export default function html(data: Record<string, string> = {}): HtmlExtension {
  /**
   * HtmlExtension from  micromark-util-types
   *
   * this: CompileContext from micromark-util-types
   *
   * enter / exit 下每个方法的参数为 Token from micromark-util-types
   */
  return {
    enter: {
      [VARIABLE_TYPES._]() {
        console.info('enter _');
        
        this.tag('<code class="variables">');
      },
      [VARIABLE_TYPES.MARKER_START]() {
        console.info('enter marker START');
      },
      [VARIABLE_TYPES.STRING]() {
        console.info('enter string');
        this.buffer();
      },
      [VARIABLE_TYPES.MARKER_END]() {
        console.info('enter marker END');
      }
    },
    exit: {
      [VARIABLE_TYPES.MARKER_START]() {
        console.info('exit marker START');
      },
      [VARIABLE_TYPES.STRING]() {
        console.info('exit string');
        
        const str = this.resume();
        
        if (str in data) {
          this.raw(this.encode(data[str]));
        }
      },
      [VARIABLE_TYPES.MARKER_END]() {
        console.info('exit marker END');
      },
      [VARIABLE_TYPES._]() {
        console.info('exit _');
        
        this.tag('</code>');
      }
    }
  };
}