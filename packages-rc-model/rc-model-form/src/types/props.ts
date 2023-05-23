import {
  FormHTMLAttributes
} from 'react';

import {
  TFormItem
} from './common';

export interface IModelProps extends FormHTMLAttributes<HTMLFormElement> {
  items: TFormItem[];
  /**
   * 是否阻止表单默认提交方式（默认 true）
   */
  preventDefault?: boolean;
  /**
   * 紧凑型，调整 Item 之间的 Margin
   */
  dense?: boolean;
}
