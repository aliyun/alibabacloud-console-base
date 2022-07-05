/**
 * 关闭事件来源
 * 
 * - backdrop - 底影
 * - element - 元素本身
 * - protector - 元素上边的覆盖层（options.protect 为 true 时）
 */
export type TCloseSource = 'backdrop' | 'protector' | 'element';

export interface IAttentionRect {
  top: number;
  left: number;
  width: number;
  height: number;
  radius: number;
}

export interface IAttentionSeekerOptions {
  protect?: boolean; // 防止被点击
  // message?: string; // 暂时不用
}

export interface IAttentionSeeker {
  element: HTMLElement;
  options?: IAttentionSeekerOptions;
}
