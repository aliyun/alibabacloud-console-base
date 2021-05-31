import storage from './_storage';

export default function add(key: string): void {
  const o = storage();
  
  o[key] = [];
}
