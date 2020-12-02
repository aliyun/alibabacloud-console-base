import {
  EAccountType
} from './enum';
import {
  IConfAccount as ConsoleBaseConfAccount
} from './types';
import parseAccount from './util/parse-account';

export default parseAccount();

export {
  EAccountType
};

export type {
  ConsoleBaseConfAccount
};
