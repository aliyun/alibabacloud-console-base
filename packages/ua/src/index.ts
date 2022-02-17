import parse, {
  IParseResult as Ua
} from './util/parse';

const UA = parse(navigator.userAgent);

export default UA;

export {
  parse
};

export {
  EOsType as OsType,
  EBrowserType as BrowserType
} from './enum';

export type {
  Ua
};
