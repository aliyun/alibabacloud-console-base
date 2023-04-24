import {
  IWindvaneError0,
  IWindvaneError
} from '../../types';
import {
  WINDVANE_ERROR_NAME
} from '../../const';

export default function createWindvaneError(o: IWindvaneError0): IWindvaneError {
  const err: IWindvaneError = new Error(o.message) as IWindvaneError;

  err.name = WINDVANE_ERROR_NAME;
  err.code = o.ret;

  return err;
}
