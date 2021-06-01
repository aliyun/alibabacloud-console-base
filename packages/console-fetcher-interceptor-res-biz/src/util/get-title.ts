import {
  IBizJson,
  TGetTitle
} from '../types';

export default function getTitle(json: IBizJson, getter?: TGetTitle): string | undefined {
  if (typeof getter === 'function') {
    return getter(json);
  }
  
  if (typeof getter === 'string') {
    return (json as any)[getter] as string; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  
  return json.title;
}
