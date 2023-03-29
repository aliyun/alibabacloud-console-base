export interface IDialogStackItem {
  backdrop: boolean;
  zIndex: number;
  zIndexBackdrop: number;
  domDialog: HTMLDivElement | null;
  domDialogContent: HTMLDivElement | null;
  dispatchSetZIndex(zIndex: number): void;
  handleCloseOnEsc(): boolean | void;
  handleCloseOnExternal(): void;
}

export interface IStack {
  put(id: string, item: IDialogStackItem): number;
  remove(id: string): number;
  get(k: string | number): IDialogStackItem | undefined;
  each(fn: (v: IDialogStackItem, k: string) => void): void;
}
