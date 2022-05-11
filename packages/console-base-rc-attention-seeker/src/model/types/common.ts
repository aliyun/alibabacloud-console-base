/**
 * 关闭事件来源
 * 
 * - backdrop - 底影
 * - element - 元素本身
 * - upper - 元素上边的覆盖层（options.protect 为 true 时）
 */
export type TCloseSource = 'backdrop' | 'upper' | 'element';

export interface IRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface IRectStyleRadius {
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  borderBottomLeftRadius: string;
  borderBottomRightRadius: string;
}

export interface IRectStyle extends IRect, IRectStyleRadius {}

export interface IAttentionSeekerOptions {
  protect?: boolean; // 防止被点击
  message?: string; // 暂时不用
}

export interface IAttentionSeekerItem {
  element: HTMLElement;
  options?: IAttentionSeekerOptions;
}
