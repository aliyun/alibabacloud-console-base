import {
  EJsonpError
} from '../const';

export default function createError(name: EJsonpError | 'AbortError', message: string): Error {
  const error = new Error(message);
  
  error.name = name; // Error 对象的默认 name 是 'Error'
  
  return error;
}
