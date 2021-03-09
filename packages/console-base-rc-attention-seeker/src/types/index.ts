export interface IAttentionSeekerOptions {
  message?: string; // 暂时不用
}

export interface IAttentionSeekerItem {
  element: HTMLElement;
  options?: IAttentionSeekerOptions;
}

export interface IPropsAttentionSeeker {
  items: IAttentionSeekerItem[];
  onClose?(): void;
}
