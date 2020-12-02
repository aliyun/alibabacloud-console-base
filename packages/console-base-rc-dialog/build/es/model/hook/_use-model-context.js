import { useContext } from 'react';
import { Context } from '../provider';
export default function useModelContext() {
  return useContext(Context);
}