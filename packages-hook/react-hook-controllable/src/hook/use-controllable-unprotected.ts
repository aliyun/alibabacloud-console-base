import {
  IOnChange,
  THookReturn
} from '../types';

import useControllable from './use-controllable';

/**
 * 不受最终默认值保护的受控（封装泛型组件时，无法确认最终默认值，可以用此 hook）
 */
export default function useControllableUnprotected<T = string, A extends Array<unknown> = []>(value?: T, defaultValue?: T, onChange?: IOnChange<T | undefined, A>): THookReturn<T | undefined, A> {
  return useControllable<T | undefined, A>(undefined, value, defaultValue, onChange);
}
