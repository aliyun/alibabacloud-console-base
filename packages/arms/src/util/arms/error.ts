import {
  IErrorInfo,
  IErrorPosition
} from '../../types';
import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

export default function error(err: Error | string | IErrorInfo, position?: Error | IErrorPosition): void {
  const bl = getBlInitialized();
  
  if (bl?.error) {
    bl.error(err, position);
  } else {
    pipe('error', [err, position]);
  }
}
