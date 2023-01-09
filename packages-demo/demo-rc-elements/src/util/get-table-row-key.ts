interface IObjectWithIdOrKey {
  id?: string;
  key?: string;
}

function getRowKeyFallback<T>(o: T, index: number): string | number {
  const o2 = o as IObjectWithIdOrKey;
  
  return o2.id ?? o2.key ?? index;
}

export default function getTableRowKey<T>(o: T, index: number, primaryKey?: keyof T): string | number {
  const keyDefault = getRowKeyFallback(o, index);
  
  if (!primaryKey) {
    return keyDefault;
  }
  
  const key = o[primaryKey];
  
  return typeof key === 'string' ? key : keyDefault;
}