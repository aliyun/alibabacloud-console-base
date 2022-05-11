import {
  ETypeApi
} from '../enum';
import {
  API_URL_MAP
} from '../const';

export default function getApiUrl(type: ETypeApi): string {
  const url = API_URL_MAP[type];
  
  if (!url) {
    throw new Error(`ConsoleAPI type ${type} not supported!`);
  }
  
  return url;
}
