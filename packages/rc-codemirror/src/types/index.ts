import {
  ForwardedRef,
  HTMLAttributes
} from 'react';
import {
  EditorConfiguration,
  EditorEventMap
} from 'codemirror';

export type TCodeMirrorRef = ForwardedRef<HTMLDivElement>;

/*
 * CodeMirror 并没有 auto-resize 的配置，只能通过 CSS 来搞 https://codemirror.net/demo/resize.html
 * 
 * 上下 4px padding，单行 15.4333px，最小高度 85px（5 行），最大高度 394px（25 行）
 */
export interface ICodeMirrorConf extends Omit<EditorConfiguration, 'value'> {
  on?: EditorEventMap;
}

export interface IFnConvertValue {
  (value: string): string;
}

export interface ILinesMinMax {
  linesMin?: number;
  linesMax?: number;
}

export interface IPropsCodeMirror extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, ILinesMinMax {
  conf?: ICodeMirrorConf;
  value?: string;
  convertValueToDisplay?: IFnConvertValue; // 输入转换
  convertValueFromDisplay?: IFnConvertValue; // 输出转换
  onChange?(value: string): void;
}
