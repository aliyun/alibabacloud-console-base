/**
 * 深度优先（Depth-Search-First）遍历 DOM 树
 * 
 * callback 返回 true 则结束当前深度，继续下一个深度
 */
export default function traverseDfs(parentNode: Element, callback: (nd: Element) => boolean | void): void {
  const stack: Element[] = [parentNode];
  
  while (stack.length) {
    const node = stack.pop();
    
    if (node && callback(node) !== true && node.children.length) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
      }
    }
  }
}
