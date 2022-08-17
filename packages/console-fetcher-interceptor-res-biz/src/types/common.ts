type TGetterString = ((o: any) => string) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

export type TIsSuccess = ((o: any) => boolean) | boolean; // eslint-disable-line @typescript-eslint/no-explicit-any

export type TGetData = ((o: any) => any) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

export type TGetCode = TGetterString;

export type TGetMessage = TGetterString;

export type TGetTitle = TGetterString;

export type TGetRequestId = TGetterString;

export interface IBizJson<T = void> {
  code?: string;
  data?: T;
  requestId?: string;
  title?: string;
  message?: string;
}