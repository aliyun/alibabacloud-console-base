export type TDataWhole = Record<string, unknown>;

export interface IFnStorageGetAll {
  (): TDataWhole;
}

export interface IFnStorageGetter {
  <T = string>(key: string): T;
}

export interface IFnStorageClearer {
  (key: string, value: null): void;
}

export interface IFnStorageSetter {
  <T extends NonNullable<unknown>>(key: string, value: T): void;
}

export type TFnStorage = IFnStorageGetAll & IFnStorageGetter & IFnStorageClearer & IFnStorageSetter;
