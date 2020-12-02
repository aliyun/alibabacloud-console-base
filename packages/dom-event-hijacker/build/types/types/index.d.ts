export interface IHijacker<T = boolean> {
    condition: (el: HTMLElement) => T | void;
    callback?(el: HTMLElement, conditionResult: T): void;
    noPreventDefault?: boolean;
    noStopPropagation?: boolean;
}
export interface IFnClickHandler {
    (el: HTMLElement, e: MouseEvent): boolean;
}
