import {
  EFetchError
} from '../const';

export default function createError(name: EFetchError, message: string): Error {
  const error = new Error(message);
  
  error.name = name; // Error 对象的默认 name 是 'Error'
  
  return error;
}
