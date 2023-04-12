interface IObjectWithIdOrKey {
  id?: string;
  key?: string;
}

function getRowKeyFallback<T>(o: T, valueIndex: number): string | number {
  const o2 = o as IObjectWithIdOrKey;
  
  return o2.id ?? o2.key ?? valueIndex;
}

export default function getTableRowKey<T>(o: T, valueIndex: number, primaryKey?: keyof T): string | number {
  const keyDefault = getRowKeyFallback(o, valueIndex);
  
  if (!primaryKey) {
    return keyDefault;
  }
  
  const key = o[primaryKey];
  
  return typeof key === 'string' ? key : keyDefault;
}