import find from './find';
import isContainedBy from './is-contained-by';

/**
 * 在某容器意外进行元素查找
 */
export default function findOutside<E extends Element = HTMLElement>(selector: string, excludeContainer: Element): E[] {
  return find<E>(selector).filter(v => !isContainedBy(v, excludeContainer));
}
