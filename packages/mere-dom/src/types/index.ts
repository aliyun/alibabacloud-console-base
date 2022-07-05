export type TSelector<E extends Element = Element> = E | string | null;
export type TParent = Document | Element;

export interface IViewport {
  width: number;
  height: number;
  scrollTop: number;
  scrollLeft: number;
}

export interface IRect {
  top: number;
  left: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
}
