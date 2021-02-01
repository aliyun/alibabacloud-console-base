import {
  EOsType,
  EBrowserType
} from '../const';

import getOs from './get-os';
import getBrowser from './get-browser';

export interface IParseResult {
  OS: EOsType;
  OS_VERSION: string;
  BROWSER: EBrowserType;
  BROWSER_VERSION: string;
}

export default function parse(ua: string): IParseResult {
  const [OS, OS_VERSION] = getOs(ua);
  const [BROWSER, BROWSER_VERSION] = getBrowser(ua);
  
  return {
    OS,
    OS_VERSION,
    BROWSER,
    BROWSER_VERSION
  };
}
