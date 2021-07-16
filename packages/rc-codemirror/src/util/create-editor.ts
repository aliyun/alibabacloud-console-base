import CodeMirror, {
  Editor
} from 'codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/display/autorefresh'; // https://codemirror.net/doc/manual.html#addon_autorefresh
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/lint/lint';

import '../addon/lint/json'; // 官方的 JSON Lint 有问题 https://github.com/scniro/react-codemirror2/issues/21

import {
  IPropsCodeMirror
} from '../types';

export default function createEditor(div: HTMLDivElement, value: string, conf: IPropsCodeMirror['conf'] = {}): Editor {
  return CodeMirror(div, {
    value,
    mode: 'text/plain', // 支持的 mode 可以查看 mode 模块的末尾
    // display
    theme: conf.theme ?? (conf.readOnly ? 'mdn-like' : 'oceanic-next'),
    indentUnit: 2,
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: !conf.readOnly,
    gutters: conf.readOnly ? [] : ['CodeMirror-lint-markers', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    foldGutter: true,
    matchBrackets: true,
    // ease
    autoRefresh: true,
    autoCloseBrackets: '()[]{}\'\'""',
    autoCloseTags: true,
    // others
    lint: !conf.readOnly,
    extraKeys: {
      Tab: false
    },
    ...conf
  });
}
