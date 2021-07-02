import storage from './_storage';

export default function removeMatched(keyPart: string): void {
  const o = storage();
  
  Object.keys(o).forEach(v => {
    if (v.includes(keyPart)) {
      o[v] = null;
      delete o[v];
    }
  });
}
