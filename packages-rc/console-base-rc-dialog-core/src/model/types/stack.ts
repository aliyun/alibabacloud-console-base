export interface IStackItem {
  backdrop: boolean;
  zIndex: number;
  zIndexBackdrop: number;
  domDialog: HTMLDivElement | null;
  domDialogContent: HTMLDivElement | null;
  setZIndex(zIndex: number): void;
  closeOnEsc(): boolean | void;
  closeOnExternal(): void;
}

export interface IStack {
  put(id: string, item: IStackItem): number;
  remove(id: string): number;
  get(k: string | number): IStackItem | undefined;
  each(fn: (v: IStackItem, k: string) => void): void;
}
