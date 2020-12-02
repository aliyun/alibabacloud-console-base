import {
  TSettingsIntlString
} from '../types';

export default function getIntlString(name: TSettingsIntlString, locale: string, fallbackLocale = 'en-US'): string {
  if (name) {
    if (typeof name === 'string') {
      return name;
    }
    
    return name[locale] || name[fallbackLocale];
  }
  
  return '';
}
