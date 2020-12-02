export interface IStack<T> {
    put(id: string, item: T): number;
    remove(id: string): number;
    get(k: string | number): T | undefined;
    each(fn: (v: T, k: string) => void): void;
}
export default function createStack<T>(): IStack<T>;
