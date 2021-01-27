import parse, {
  IParseResult as Ua
} from './util/parse';

const UA = parse(navigator.userAgent);

export default UA;

export {
  parse
};

export type {
  Ua
};
